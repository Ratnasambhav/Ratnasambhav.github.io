import React from 'react';
import { Link, graphql } from 'gatsby';
import Head from '../components/Head';
import Container from '../components/Container';

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Container>
      <Head
        title="Blog | Ratnasambhav Priyadarshi"
        URL="https://ratnasambhav.github.io/blog"
      />
      <div className="blog">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="post" key={post.id}>
                <div className="post--info">
                  <Link className="post--info--title" to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  <p className="post--info--date">{post.frontmatter.date}</p>
                  <div className="post--info--underline" />
                </div>
                <p className="post--excerpt">{post.excerpt}</p>
              </div>
            );
          })}
      </div>
    </Container>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

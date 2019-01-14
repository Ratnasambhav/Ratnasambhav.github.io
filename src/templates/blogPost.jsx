import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Head from '../components/Head';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Container>
      <Head
        title={post.frontmatter.title}
        URL={post.frontmatter.path}
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} className="blogPost" />
    </Container>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

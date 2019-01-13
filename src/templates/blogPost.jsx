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
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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

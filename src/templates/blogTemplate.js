import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/SEO";

import "../assets/stylesheets/blogTemplate.css";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={`VisionMad | ${frontmatter.title}`} description={frontmatter.description} />
      {console.log(frontmatter.type)}
      <div className="blog-post-container">
        <div id="top-heading"></div>
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <small className="date">{frontmatter.date}</small>
          {
            frontmatter.type === "curriculum" ?
            <p>{frontmatter.description}</p>:
            null
          }
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          >
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
query BlogPostBySlug($postSlug: String!) 
  {
    markdownRemark(frontmatter: { slug: { eq: $postSlug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        type
      }
    }
  }
`
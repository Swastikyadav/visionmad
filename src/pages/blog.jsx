import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

import "../assets/stylesheets/blogsListPage.css";

export default function BlogPage({ data }) {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  return (
    <Layout>
      {console.log(edges)}
      <div className="blogs-list-page">
        <section className="blogs-header">
          <h1>VisionMad Web-Development Blogs</h1>
          <p>Best web-development tips and tricks blog. The best of which are featured in the weekly newsletter. Join the newsletter now!</p>
        </section>
        {edges.map(({node: {frontmatter: {slug, title, description}}}) => {
          return (    
            <div className="blog-card">
              <h2><Link to={slug}>{title}</Link></h2>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const BlogListQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            description
          }
        }
      }
    }
  }
`
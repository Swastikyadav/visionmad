import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/SEO";

import "../assets/stylesheets/blogsListPage.css";

export default function BlogPage({ data }) {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;

  return (
    <Layout>
      <SEO
        title="VisionMad | The best actionable freelancing blog to grow your business."
        description="The best actionable freelancing tips and tricks blog to grow your business."
      />
      <div className="blogs-list-page">
        <section className="blogs-header">
          <h1>VisionMad Web-Development Blogs</h1>
          <p>Best actionable freelancing tips and tricks blog to grow your business. The best of which are featured in the weekly newsletter. Join the newsletter now!</p>
        </section>
        {edges.map(({node: {frontmatter: {slug, title, description}}}) => {
          return (    
            <div key={slug} className="blog-card">
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
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}) {
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
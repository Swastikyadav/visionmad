import React from "react";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";

import "../../assets/stylesheets/curriculum.css";


export default function LearnWebDev({ data }) {
  return (
    <Layout>
      <div className="main-learn-page">
        <h1>Full stack web development curriculum.</h1>
        <p className="learn-page-text">
          Learn at your own pace with our hands-on curriculum, step by step guide, and detailed screencasts.
          Everything you need and nothing you don't.
        </p>
        <div className="thumbnails-div">
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <Link key={edge.node.frontmatter.slug} to={edge.node.frontmatter.slug}>
                <Img fluid={edge.node.frontmatter.featuredImg.childImageSharp.fluid} className="thumbnail" alt="html-css-thumbnnail" />
              </Link>
            )
            })}
        </div>
      </div>
    </Layout>
  );
}

export const ThumbnailImage = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "curriculum"}}}) {
      edges {
        node {
          frontmatter {
            slug
            featuredImg {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
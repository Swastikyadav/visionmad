import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO({title, description}) {
  const { site } = useStaticQuery(query);
  const { siteDescription, siteTitle } = site.siteMetadata;

  return (
    <Helmet>
      <title>{title || siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
    </Helmet>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        siteDescription
        siteTitle
      }
    }
  }
` 

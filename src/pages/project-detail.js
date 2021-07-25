import React from "react";
import queryString from "query-string";

import PortfolioArr from "../data/portfolio-data";
import Layout from "../components/Layout";

function ProjectDetail({ location }) {
  const project = PortfolioArr.find((projectObj) => {
    return queryString.parse(location.search).name === projectObj.client;
  });

  return (
    <Layout>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-8 border">
              <div className="portfolio-details-slider">
                <div className="align-items-center">

                  <img src={project.image} alt="" />

                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Client</strong>: {project.client}</li>
                  <li><strong>Project date</strong>: {project.date}</li>
                  <li><strong>Project URL</strong>: <a href={project.url} target="_blank" rel="noreferrer">{project.url}</a></li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Here are some details of the project</h2>
                <p>
                  {project.description}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}

export default ProjectDetail;
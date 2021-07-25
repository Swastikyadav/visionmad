import React from "react";
import { Link } from "gatsby";

import PortfolioArr from "../data/portfolio-data";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Take a glimpse at some of our projects and clients.</p>
        </div>

        <div className="row portfolio-container">

          {
            PortfolioArr.map((project, idx) => {
              return (
                <div className="col-lg-4 col-md-6 portfolio-item border" key={project.client}>
                  <Link to={`/project-detail/?name=${project.client}`}>
                    <div className="portfolio-wrap">
                      <img src={project.image} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>{project.client}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          }
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
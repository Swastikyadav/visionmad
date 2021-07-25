import React from "react";
import { Link } from "gatsby";

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className=" text-center">
            <h1>Branding and Development for online course creators</h1>
            <h2>Sell more courses with highly converting, SEO optimized landing pages.</h2>
          </div>
        </div>
        <div className="text-center">
          <Link to="#about" className="btn-get-started scrollto">Get Started</Link>
        </div>

        <div className="row icon-boxes">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="ri-palette-line"></i></div>
              <h4 className="title"><Link to="/">Branding</Link></h4>
              <p className="description">Create a brand for your course. A brand that people would love to buy from.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="ri-stack-line"></i></div>
              <h4 className="title"><Link to="/">Development</Link></h4>
              <p className="description">Build highly converting landing pages. We build websites that gets you result.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i class="ri-search-eye-line"></i></div>
              <h4 className="title"><Link to="/">SEO</Link></h4>
              <p className="description">Optimize your site for the search engine, so that you rank better in SERP.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
            <div className="icon-box">
              <div className="icon"><i className="ri-edit-2-fill"></i></div>
              <h4 className="title"><Link to="/">CopyWriting</Link></h4>
              <p className="description">Copy, that supports your course and landing page, so that you sell more courses.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
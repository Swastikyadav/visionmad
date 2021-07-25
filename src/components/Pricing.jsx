import React from "react";

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Pricing</h2>
          <p>Our pricing model is very straightforward, with No hourly charges and hidden fees. We work on a fixed-price basis. Check our two pricing models below.</p>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 mt-4 mt-md-0">
            <div className="box featured">
              <h3>Branding + Development</h3>
              <h3>Basic</h3>
              <h4>₹ 15,000</h4>
              <ul>
                <li>Branding for your course</li>
                <li>Logo as per the brand design</li>
                <li>Highly converting landing page</li>
                <li>Copywriting to support your landing page</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Get In Touch Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mt-4 mt-lg-0">
            <div className="box featured">
              <h3>Branding + Development + SEO</h3>
              <h3>Advance</h3>
              <h4>₹ 20,000</h4>
              <ul>
                <li>Everything in basic plan</li>
                <li>On Page / Off Page SEO</li>
                <li>3 Blog Posts: SEO configured</li>
                <li>Search Console & Google Analytics setup</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Get In Touch Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;
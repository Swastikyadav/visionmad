import React from "react";
import CoreBenefits from "./CoreBenefits";
import NewsLetterForm from "./NewsLetterForm";

import "../assets/stylesheets/comingsoon.css";

function LandingPage() {
  return (
    <>
      <div className="hero-section">
        <aside className="hero-text-aside">
          <div>
            <h1><span className="underline">Vision</span>Mad</h1>
            <p>Vision to <strong className="underline">M</strong>ake <strong className="underline">A</strong> <strong className="underline">D</strong>ifference</p>
            <p>
              Learn web-development and build digital products.
              Subscribe and learn to code with product mindset.
            </p>
            <NewsLetterForm />
          </div>
        </aside>
        <aside className="hero-media-aside">
          <iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/Hys4Y-IHSt8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="test-youtube-embed"></iframe>
        </aside>
      </div>
      <div className="core-benefits">
        <CoreBenefits />
      </div>
    </>
  )
}

export default LandingPage;
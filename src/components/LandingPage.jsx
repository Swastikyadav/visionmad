import React from "react";
import CoreBenefits from "./CoreBenefits";

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
              Learn web-development through weekly news letter content.
              Subscribe to be the first to know when we launch.
            </p>
            <input type="email" name="email" placeholder="Email to get notified" />
            <button className="sub-button">Notify Me</button>
          </div>
        </aside>
        <aside className="hero-media-aside">
          <iframe src="https://player.vimeo.com/video/502500087?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="New Recording - 20/01/2021, 13:07:21"></iframe>
        </aside>
      </div>
      <div className="core-benefits">
        <CoreBenefits />
      </div>
    </>
  )
}

export default LandingPage;
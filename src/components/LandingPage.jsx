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
          <iframe id="vp1eARDO" title="Video Player" width="640" height="360" frameborder="0" src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1615385535&f=eARDO0Q27dmbUfeLpaag6Q&d=0&m=p&r=360p+480p+720p&volume=100&start_res=720p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=" allowfullscreen></iframe>
        </aside>
      </div>
      <div className="core-benefits">
        <CoreBenefits />
      </div>
    </>
  )
}

export default LandingPage;
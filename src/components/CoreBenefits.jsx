import React from "react";

import OneStopGuide from "../assets/media/onestopguide.svg";
import SkillsThatMatter from "../assets/media/skillsthatmatter.svg";
import ProductMindset from "../assets/media/productmindset.svg";
import PaymentCard from "../assets/media/paymentcard.svg";
import "../assets/stylesheets/corebenefits.css";

function CoreBenefits() {
  return (
    <>
      <h2 className="secondary-heading"><span className="underline">Core</span> Benefits</h2>
      <section className="benefit-section bs-1">
        <aside className="text-info">
          <h2><span className="underline">Your one-stop guide</span> to web-development.</h2>
          <p>From "Hello World" to building real-world web-apps. Get out of the tutorial hell.</p>
        </aside>
        <aside className="illustrations">
          <img className="benefit-img" src={OneStopGuide} alt="one-stop-guide-for-web-development"/>
        </aside>
      </section>
      <section className="benefit-section bs-2">
        <aside className="illustrations">
          <img className="benefit-img" src={SkillsThatMatter} alt="one-stop-guide-for-web-development"/>
        </aside>
        <aside className="text-info">
          <h2>Learn <span className="underline">skills that matter</span> in today's modern world.</h2>
          <p>Forget about outdated courses, languages, and frameworks. Learn everything you need and nothing you don't.</p>
        </aside>
      </section>
      <section className="benefit-section bs-3">
        <aside className="text-info">
          <h2>Code with <span className="underline">product mindset.</span></h2>
          <p>Learn to productize your knowledge. Build products, not just another dummy project.</p>
        </aside>
        <aside className="illustrations">
          <img className="benefit-img" src={ProductMindset} alt="one-stop-guide-for-web-development"/>
        </aside>
      </section>
      <section className="benefit-section bs-4">
        <aside className="illustrations">
          <img className="benefit-img" src={PaymentCard} alt="one-stop-guide-for-web-development"/>
        </aside>
        <aside className="text-info">
          <h2><span className="underline">Start earning</span> with your web-dev skills.</h2>
          <p>Even just with HTML and CSS you can start generating a revenue for yourself.</p>
        </aside>
      </section>
    </>
  );
}

export default CoreBenefits;
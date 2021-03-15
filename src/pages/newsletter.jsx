import React from "react";
import Layout from "../components/layout";
import NewsLetterForm from "../components/NewsLetterForm";

import "../assets/stylesheets/newsletterPage.css";

function NewsLetter() {
  return (
    <Layout>
      <section class="newsletter-page">
        <h1>Productize your web-dev knowledge.</h1>
        <p>Weekly newsletter on how to build your microbusiness as a web developer. Learn to code with a product mindset.</p>
        <NewsLetterForm />
      </section>
    </Layout>
  );
}

export default NewsLetter;
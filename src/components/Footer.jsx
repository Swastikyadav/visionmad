import React from "react";
import NewsLetterForm from "./NewsLetterForm";

import "../assets/stylesheets/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h1><span className="underline">Vision</span>Mad</h1>
      <p>
        Learn web-development and build digital products.
        Subscribe and learn to code with product mindset.
      </p>
      <NewsLetterForm />
    </footer>
  );
}

export default Footer;
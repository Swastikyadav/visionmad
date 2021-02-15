import React from "react";
import NewsLetterForm from "./NewsLetterForm";

import "../assets/stylesheets/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h1><span className="underline">Vision</span>Mad</h1>
      <p>
        Learn web-development through weekly news letter content.
        Subscribe to be the first to know when we launch.
      </p>
      <NewsLetterForm />
    </footer>
  );
}

export default Footer;
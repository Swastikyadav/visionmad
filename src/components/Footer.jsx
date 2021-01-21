import React from "react";

import "../assets/stylesheets/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h1><span className="underline">Vision</span>Mad</h1>
      <p>
        Learn web-development through weekly news letter content.
        Subscribe to be the first to know when we launch.
      </p>
      <input type="email" name="email" placeholder="Email to get notified" />
      <button className="sub-button">Notify Me</button>
    </footer>
  );
}

export default Footer;
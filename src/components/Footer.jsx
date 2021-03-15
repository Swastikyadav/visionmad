import React from "react";
import { Link } from "gatsby";

import NewsLetterForm from "./NewsLetterForm";
import { TwitterOutlined, InstagramOutlined, FacebookOutlined, YoutubeOutlined } from "@ant-design/icons";

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

      <Link to="https://twitter.com/visionmadHQ" className="tw-icon" target="_blank"><TwitterOutlined className="social-icon" /></Link>
      <Link to="https://www.instagram.com/visionmadhq/" className="insta-icon" target="_blank"><InstagramOutlined className="social-icon" /></Link>
      <Link to="https://www.facebook.com/VisionMadHQ" className="fb-icon" target="_blank"><FacebookOutlined className="social-icon" /></Link>
      <Link to="https://www.youtube.com/channel/UCJSWJgTRVdftxZpFXWtMZgw" className="yt-icon" target="_blank"><YoutubeOutlined className="social-icon" /></Link>
    </footer>
  );
}

export default Footer;
import React from "react";
import { Link } from "gatsby";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>OnePage</h3>
              <p>
                Lakhpat Colony, School Road <br />
                New Delhi, ND 110044<br />
                The Republic of India <br /><br />
                <strong>Phone 1:</strong> +91 9971780581<br />
                <strong>Phone 2:</strong> +91 8414894154<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">About us</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Branding</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Web Development</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">SEO</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="#">Digital Marketing</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Ready to join us</h4>
              <p>Sell more courses with highly converting, SEO optimized landing pages.</p>
              <h1 className="logo"><Link to="/">Vision Mad</Link></h1>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">

        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>VisionMad</span></strong>. All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
          <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
          <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
          <Link to="#" className="youtube"><i className="bx bxl-youtube"></i></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
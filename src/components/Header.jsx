import React, { useRef } from "react";
import { Link } from "gatsby";

function Header() {
  const navBarRef = useRef(null);

  const handleMenuClick = (event) => {
    navBarRef.current.classList.toggle('navbar-mobile');
    event.target.classList.toggle('bi-x')
  }

  return (
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><Link to="/">Vision Mad</Link></h1>
      {/* <a href="index.html" className="logo"><img src="assets/img/apple-touch-icon.png" alt="" className="img-fluid"></a> */}

      <nav id="navbar" ref={navBarRef} className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto o" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" onClick={handleMenuClick} role="none"></i>
      </nav>
    </div>
  </header>
  );
}

export default Header;
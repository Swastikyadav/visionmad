import React from "react";

function Header() {
  const handleMenuClick = (event) => {
    document.querySelector("#navbar").classList.toggle('navbar-mobile');
    event.target.classList.toggle('bi-x')
  }

  return (
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="/">Vision Mad</a></h1>
      {/* <a href="index.html" className="logo"><img src="assets/img/apple-touch-icon.png" alt="" className="img-fluid"></a> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto o" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" onClick={handleMenuClick}></i>
      </nav>
    </div>
  </header>
  );
}

export default Header;
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../assets/stylesheets/layout.css";

export default function Layout ({ children, showModal }) {
  return (
    <div className="layout">
      <Header showModal={showModal} />
      {children}
      <Footer />
    </div>
  );
}
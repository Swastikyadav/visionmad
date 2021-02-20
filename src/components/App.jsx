import React from "react"

import LandingPage from "./LandingPage";
import Layout from "./layout";
import SEO from "./SEO";

import "antd/dist/antd.css";
import "../assets/stylesheets/index.css";

function App() {
  return (
    <Layout>
      <SEO />
      <LandingPage />
    </Layout>
  )
}

export default App;

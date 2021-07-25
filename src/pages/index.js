import React from "react";

import App from "../components/App";
import Layout from "../components/Layout";

// CSS imports
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";

function Home() {
  return (
    <Layout>
      <App />
    </Layout>
  )
}

export default Home;
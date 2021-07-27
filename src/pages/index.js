import React, { useEffect } from "react";

import App from "../components/App";
import Layout from "../components/Layout";

import { contactWidget } from "../utils/widget";

// CSS imports
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/css/style.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/remixicon/remixicon.css";

function Home() {
  useEffect(() => {
    contactWidget(document, 'script', 'rasayel-js');
  }, []);

  return (
    <Layout>
      <App />
    </Layout>
  )
}

export default Home;
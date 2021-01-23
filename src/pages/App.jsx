import React, { useState } from "react"
import ComingSoonPage from "./ComingSoonPage";
import Layout from "../components/layout";
import { NavLink, useLocation } from "react-router-dom";
import { Modal } from "antd";

import "antd/dist/antd.css";
import "../assets/stylesheets/index.css";

function App() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  }

  const showModal = () => {
    setVisible(true);
  }

  const checkActive = () => {
    const { pathname } = location;
    return pathname === "/";
  }

  return (
    <Layout showModal={showModal}>
      <ComingSoonPage />

      <Modal
        visible={visible}
        title="Navigation Links"
        onCancel={handleCancel}
        footer={[]}
      >
        <NavLink to="/" activeClassName="active-link" isActive={checkActive} onClick={handleCancel}>
          Home
        </NavLink><br /><br />
        <NavLink to="/blog" activeClassName="active-link" onClick={handleCancel}>
          Blog
        </NavLink>
      </Modal>
    </Layout>
  )
}

export default App;

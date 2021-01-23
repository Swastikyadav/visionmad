import React, { useState } from "react"
import ComingSoonPage from "./ComingSoonPage";
import Layout from "../components/layout";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Modal } from "antd";

import "antd/dist/antd.css";
import "../assets/stylesheets/index.css";

function Home() {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  }

  const showModal = () => {
    setVisible(true);
  }

  return (
    <>
      <BrowserRouter>
        <Layout showModal={showModal}>
          <ComingSoonPage />

          <Modal
            visible={visible}
            title="Navigation Links"
            onCancel={handleCancel}
            footer={[]}
          >
            <NavLink to="/" activeClassName="active-link" onClick={handleCancel}>
              Home
            </NavLink>
          </Modal>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default Home;

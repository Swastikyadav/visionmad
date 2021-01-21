import React, { useState } from "react"
import Header from "../components/Header";
import ComingSoonPage from "./ComingSoonPage";
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
        <Header showModal={showModal} />
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
      </BrowserRouter>
    </>
  )
}

export default Home;

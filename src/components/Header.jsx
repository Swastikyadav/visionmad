import React, { useState } from "react";
import { Link } from "gatsby";
import { Breadcrumb, Modal } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons";

import Logo from "../assets/media/logo.png";
import "../assets/stylesheets/headerdiv.css";

function Header() {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  }

  const showModal = () => {
    setVisible(true);
  }

  return (
    <>
      <header className="header-div">
        <img src={Logo} alt="visionmad-logo" width="60"/>
        <nav>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>
              <Link className="link" activeClassName="active-link" to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className="link" activeClassName="active-link" partiallyActive={true} to="/blog">Blog</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </nav>
        <span className="ham-burger">
          <AlignCenterOutlined onClick={showModal} />
        </span>
      </header>

      <Modal
        visible={visible}
        title="Navigation Links"
        onCancel={handleCancel}
        footer={[]}
      >
        <Link to="/" activeClassName="active-link" onClick={handleCancel}>
          Home
        </Link><br /><br />
        <Link to="/blog" activeClassName="active-link" partiallyActive={true} onClick={handleCancel}>
          Blog
        </Link>
      </Modal>
    </>
  );
}

export default Header;
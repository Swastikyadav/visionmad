import React from "react";
import { Breadcrumb } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons";

import { NavLink, useLocation } from "react-router-dom";

import Logo from "../assets/media/logo.png";
import "../assets/stylesheets/headerdiv.css";

function Header({ showModal }) {
  const location = useLocation();

  const checkActive = () => {
    const { pathname } = location;
    return pathname === "/";
  }

  return (
    <>
      <header className="header-div">
        <img src={Logo} alt="visionmad-logo" width="60"/>
        <nav>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>
              <NavLink className="link" activeClassName="active-link" isActive={checkActive} to="/">Home</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink className="link" activeClassName="active-link" to="/blog">Blog</NavLink>
            </Breadcrumb.Item>
          </Breadcrumb>
        </nav>
        <span className="ham-burger">
          <AlignCenterOutlined onClick={showModal} />
        </span>
      </header>
    </>
  );
}

export default Header;
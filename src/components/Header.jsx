import React from "react";
import { Breadcrumb } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons";

import { NavLink } from "react-router-dom";

import Logo from "../assets/media/logo.png";
import "../assets/stylesheets/headerdiv.css";

function Header({ showModal }) {
  return (
    <>
      <div className="header-div">
        <img src={Logo} alt="visionmad-logo" width="60"/>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item>
            <NavLink className="link" activeClassName="active-link" to="/">Home</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
        <span className="ham-burger">
          <AlignCenterOutlined onClick={showModal} />
        </span>
      </div>
    </>
  );
}

export default Header;
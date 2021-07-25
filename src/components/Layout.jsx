import React from "react";

import Header from "./Header";

function Layout({ children }) {
  return (
    <div style={{marginTop: "60px"}}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
import React from "react";
import { PropTypes } from "prop-types";
import MobileHeader from "@mobile/components/MobileHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <MobileHeader />
      <div>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;

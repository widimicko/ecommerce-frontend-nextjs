import PropTypes from "prop-types";

import MobileHeader from "@mobile/components/MobileHeader";

const Layout = ({ children }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
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

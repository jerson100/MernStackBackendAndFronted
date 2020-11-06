import React from "react";
import PropTypes from "prop-types";
import "./fullCenter.scss";

const FullCenter = ({ children, color, fixed }) => {
  return (
    <div
      className={`full-center full-center--${color} ${
        fixed ? "full-center--fixed" : ""
      }`}
    >
      {children}
    </div>
  );
};

FullCenter.propTypes = {
  color: PropTypes.oneOf(["darken", "gray", "darkenTransparent"]),
  fixed: PropTypes.bool,
};

FullCenter.defaultProps = {
  color: "darken",
  fixed: false,
};

export default FullCenter;

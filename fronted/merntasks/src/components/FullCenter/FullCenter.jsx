import React from "react";
import PropTypes from "prop-types";
import "./fullCenter.scss";

const FullCenter = ({ children, color }) => {
  return <div className={`full-center full-center--${color}`}>{children}</div>;
};

FullCenter.propTypes = {
  color: PropTypes.oneOf(["darken", "gray"]),
};

FullCenter.defaultProps = {
  color: "darken",
};

export default FullCenter;

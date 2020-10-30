import React from "react";
import PropTypes from "prop-types";
import "./label.scss";

const Label = ({ children, className }) => {
  return <label className={`label ${className}`}>{children}</label>;
};

Label.propTypes = {
  className: PropTypes.string,
};

Label.defaultProps = {
  className: "",
};

export default Label;

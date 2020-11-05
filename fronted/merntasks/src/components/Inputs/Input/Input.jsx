import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = ({ rounded, ...props }) => {
  let name = "input";
  name += rounded ? " input--rounded" : "";
  return <input {...props} className={`${name} ${props.className}`} />;
};

Input.propTypes = {
  rounded: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  rounded: false,
  type: "text",
  className: "",
};

export default Input;

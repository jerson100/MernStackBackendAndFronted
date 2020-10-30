import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = ({
  type,
  rounded,
  onChange,
  value,
  placeholder,
  id,
  className,
}) => {
  let name = "input";
  name += rounded ? " input--rounded" : "";

  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  };

  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      className={`${name} ${className}`}
      id={id}
      onChange={handleChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  rounded: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  rounded: false,
  onChange: null,
  type: "text",
  placeholder: "",
  className: "",
};

export default Input;

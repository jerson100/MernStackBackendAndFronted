import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, rounded, onclick, fullWidth }) => {
  let classs = "btn";
  classs += rounded ? " btn--rounded" : "";
  classs += fullWidth ? " btn--fullWidth" : "";
  const handleClick = (e) => {
    onclick && onclick(e);
  };
  return (
    <button className={classs} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  rounded: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onclick: PropTypes.func,
};

Button.defaultProps = {
  rounded: false,
  fullWidth: false,
  onclick: null,
};

export default Button;

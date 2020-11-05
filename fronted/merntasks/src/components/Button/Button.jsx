import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import Loader from "../Loader/Loader";

const Button = ({
  children,
  rounded,
  onclick,
  fullWidth,
  isLoading,
  textLoading,
}) => {
  let classs = "btn";
  classs += rounded ? " btn--rounded" : "";
  classs += fullWidth ? " btn--fullWidth" : "";
  const handleClick = (e) => {
    onclick && onclick(e);
  };
  return (
    <button className={classs} onClick={handleClick} disabled={isLoading}>
      {isLoading ? (
        <Loader text={textLoading} type="oneCircle" color="orange" />
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  rounded: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onclick: PropTypes.func,
  isLoading: PropTypes.bool,
  textLoading: PropTypes.string,
};

Button.defaultProps = {
  rounded: false,
  fullWidth: false,
  onclick: null,
  isLoading: false,
  textLoading: "Cargando",
};

export default Button;

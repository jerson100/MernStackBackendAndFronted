import React from "react";
import PropTypes from "prop-types";
import "./loader.scss";

const Loader = ({ size, text, type, color }) => {
  switch (type) {
    case "threeCircle":
      return <ThreeCircle text={text} size={size} color={color} />;
    case "twoCircle":
      return <TwoCircle text={text} size={size} color={color} />;
    case "rectangleSkeleton":
      return <RectangleSkeleton size={size} color={color} />;
    default:
      return <OneCircle text={text} size={size} color={color} />;
  }
};

const RectangleSkeleton = ({ size, color = "rgba(0,0,0,0,.5)" }) => {
  return <div className={`loader loader--skeleton loader--s-${size}`}></div>;
};

const OneCircle = ({ text, size, color }) => {
  return (
    <div className={`loader loader--circle loader--s-${size}`}>
      {text && (
        <span className="loader__text" style={{ color: color }}>
          {text}
        </span>
      )}
      <div className="loader__item" style={{ borderTopColor: color }}></div>
    </div>
  );
};

const TwoCircle = ({ text, size, color }) => {
  return (
    <div className={`loader loader--circle loader--s-${size}`}>
      <div
        className="loader__item loader__item--left"
        style={{ borderTopColor: color }}
      ></div>
      {text && (
        <span className="loader__text" style={{ color: color }}>
          {text}
        </span>
      )}
      <div
        className="loader__item loader__item--right"
        style={{ borderTopColor: color }}
      ></div>
    </div>
  );
};

const ThreeCircle = ({ text, size, color }) => {
  return (
    <div className={`loader loader--circle loader--s-${size}`}>
      {text && <span className="loader__text">{text}</span>}
      <div className="loader__item" style={{ borderTopColor: color }}></div>
      <div className="loader__item" style={{ borderTopColor: color }}></div>
      <div className="loader__item" style={{ borderTopColor: color }}></div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(["sm", "lg", "xl", "xxl"]),
  type: PropTypes.oneOf(["oneCircle", "threeCircle", "rectangleSkeleton"]),
  text: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: "sm",
  text: "",
  type: "oneCircle",
  color: "#fff",
};

export default Loader;

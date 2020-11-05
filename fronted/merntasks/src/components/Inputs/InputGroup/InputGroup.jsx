import React from "react";
import PropTypes from "prop-types";
import Label from "../../Label/Label";
import Input from "../Input/Input";
import "./inputGroup.scss";

const InputGroup = ({ children, isHorizont }) => {
  let className = "input-group";
  className += isHorizont ? " input-group--horizont" : "";
  return <div className={className}>{children}</div>;
};

InputGroup.propTypes = {
  isHorizont: PropTypes.bool,
};

InputGroup.defaultProps = {
  isHorizont: false,
};

const LabelG = (props) => {
  return (
    <Label className={"input-group__label"} {...props}>
      {props.children}
    </Label>
  );
};

const InputG = (props) => {
  return <Input className={"input-group__input"} rounded {...props} />;
};

InputGroup.Label = LabelG;
InputGroup.Input = InputG;

export default InputGroup;

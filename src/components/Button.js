import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ text, circleStyle, buttonStyle }) => {
  return (
    <NavLink className="circle" style={circleStyle} to="/about">
      <button className="button" type="button" style={buttonStyle}>
        {text}
      </button>
    </NavLink>
  );
};

export default Button;
import React from "react";

const Button = ({ text, circleStyle, buttonStyle }) => {
  return (
    <div className="circle" style={circleStyle}>
      <button className="button" type="button" style={buttonStyle}>
        {text}
      </button>
    </div>
  );
};

export default Button;
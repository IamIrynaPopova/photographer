import React from "react";

const Button = ({ text }) => {
  return (
    <div className="button-wrapper">
      <div className="circle">
        <button className="button" type="button">
          {text}
        </button>
      </div>
    </div>
  );
};

export default Button;
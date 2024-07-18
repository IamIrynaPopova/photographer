import React from "react";
import Button from "./Button";

const Footer = () => {
  const circleStyle = {
    width: "220px",
    height: "220px",
  };

  const buttonStyle = {
    width: "200px",
    height: "200px",
    fontSize: "24px",
    lineHeight: "1.1",
    padding: "74px 20px",
  };

  return (
    <footer className="footer container">
      <div className="footer__title-wrapper">
        <div className="footer__button-wrapper">
          <Button
            text="Get in Touch"
            circleStyle={circleStyle}
            buttonStyle={buttonStyle}
          />
        </div>
        <h2 className="footer__title">
          Let’s Work <span>Together</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;

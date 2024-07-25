import React from "react";
import Button from "../components/Button";

const LetIsWork = () => {
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
    <section className="letiswork-wrapper">
      <div className="letiswork__button-wrapper">
        <Button
          text="Get in Touch"
          circleStyle={circleStyle}
          buttonStyle={buttonStyle}
        />
      </div>
      <h2 className="letiswork__title">
        Let’s Work <br></br>
        <span>Together</span>
      </h2>
    </section>
  );
};

export default LetIsWork;

import React from "react";
import hero from "../image/hero.jpg";
import imageButton from "../image/image-button.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__wrapper">
        <img className="hero__image" src={hero} alt="human"></img>
        <div className="hero__title-wrapper">
          <h1 className="hero__title">
            Jacob <br></br>Grønberg
          </h1>
          <p className="hero__description">Photographer </p>
          <p className="hero__description">& Visual artist</p>
        </div>
        <div className="hero__button-wrapper">
          <img
            className="hero__button-image"
            src={imageButton}
            alt="human"
          ></img>
          <p className="hero__button-text">Hi, Im Jacob</p>
          <Button text="Work With Me" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

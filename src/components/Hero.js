import React from "react";
import hero from "../image/hero.jpg";
import imageButton from "../image/image-button.jpg";
import Button from "./Button";
import sprite from "../image/sprite/sprite.svg";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__image-wrapper">
        <img className="hero__image" src={hero} alt="human"></img>
        <div className="hero__arrow">
          <svg className="hero__svg">
            <use href={`${sprite}#arrow-down`}></use>
          </svg>
          <p className="hero__arrow-text">
            Scroll Down<br></br> & Explore
          </p>
        </div>
      </div>
      <div className="hero__title-wrapper">
        <h1 className="hero__title">
          Jacob <br></br>Grønberg
        </h1>
        <p className="hero__description">Photographer </p>
        <p className="hero__description">& Visual artist</p>
      </div>
      <div className="hero__button-box">
        <img className="hero__button-image" src={imageButton} alt="human"></img>
        <p className="hero__button-text">Hi, Im Jacob</p>
        <div className="hero__button-wrapper">
          <Button text="Work With Me" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

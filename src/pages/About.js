import React from "react";
import LetIsWork from "../components/LetIsWork";
import about from "../image/about.jpg";

const About = () => {
  return (
    <>
      <section className="about container">
        <div className="about__title-wrapper">
          <img className="about__image" src={about} alt="human"></img>
          <div className="about__description">
            <p className="about__subtitle">About</p>
            <h1 className="about__title">
              Jacob <br></br>Grønberg
            </h1>
          </div>
        </div>
      </section>
      <LetIsWork />
    </>
  );
};

export default About;

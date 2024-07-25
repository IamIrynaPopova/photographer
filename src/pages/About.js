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
            <h1 className="about__title">About</h1>
            <h2 className="about__subtitle">
              Jacob <br></br>Grønberg
            </h2>
          </div>
        </div>
        <ul className="about__list">
          <li className="about__item">
            <h3 className="about__item-name">About</h3>
            <div className="about__item-description">
              <p>
                Massa vitae tortor condimentum lacinia quis vel eros donec. In
                fermentum et sollicitudin ac orci phasellus egestas tellus
                rutrum. Congue nisi vitae suscipit tellus mauris a diam
                maecenas.
              </p>
              <p>
                Massa vitae tortor condimentum lacinia quis vel eros donec. In
                fermentum et sollicitudin ac orci phasellus egestas tellus
                rutrum. Congue nisi vitae suscipit tellus mauris a diam
                maecenas.
              </p>
              <p>
                Massa vitae tortor condimentum lacinia quis vel eros donec. In
                fermentum et sollicitudin ac orci phasellus egestas tellus
                rutrum. Congue nisi vitae suscipit tellus mauris a diam
                maecenas.
              </p>
            </div>
          </li>
          <li className="about__item">
            <h3 className="about__item-name">Experiences</h3>
            <ul className="list">
              <li className="list__item">
                <div className="list__title-wrapper">
                  <h5 className="list__title">Art Director</h5>
                  <p className="list__subtitle">Art Studio</p>
                </div>
                <p className="list__date">
                  Okt 2020 <span className="list__line"></span> Currently
                </p>
              </li>
              <li className="list__item">
                <div className="list__title-wrapper">
                  <h5 className="list__title">Jury</h5>
                  <p className="list__subtitle">Awwards</p>
                </div>
                <p className="list__date">June 2020</p>
              </li>
              <li className="list__item">
                <div className="list__title-wrapper">
                  <h5 className="list__title">Photographer & Art director</h5>
                  <p className="list__subtitle">Freelance</p>
                </div>
                <p className="list__date">
                  Okt 2019 <span className="list__line"></span> Sep 2020
                </p>
              </li>
              <li className="list__item">
                <div className="list__title-wrapper">
                  <h5 className="list__title">Art Study</h5>
                  <p className="list__subtitle">Harvard</p>
                </div>
                <p className="list__date">
                  Jan 2016 <span className="list__line"></span>Sep 2019
                </p>
              </li>
            </ul>
          </li>
          <li className="about__item">
            <h3 className="about__item-name">Recognitions</h3>
            <ul className="list">
              <li className="list__item">
                <div className="list__title-wrapper">
                  <h5 className="list__title">Photography Portfoltio </h5>
                  <p className="list__subtitle">Feb 2022</p>
                </div>
                <p className="list__date">Awwards</p>
              </li>
              <li className="list__item">
                <div className="list__title-wrapper">
                  <h5 className="list__title">Cover Photo</h5>
                  <p className="list__subtitle">May 2021</p>
                </div>
                <p className="list__date">Time Magazine</p>
              </li>
              <li className="list__item">
                <div className="list__title-wrapper">
                  <h5 className="list__title">Design Portfolio</h5>
                  <p className="list__subtitle">Dec 2020</p>
                </div>
                <p className="list__date">Awwards</p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <LetIsWork />
    </>
  );
};

export default About;

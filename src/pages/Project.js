import React from "react";
import Arrow from "../components/Arrow";
import projectHero from "../image/project-hero.jpg";
import project1 from "../image/project1.jpg";
import project2 from "../image/project2.jpg";
import project3 from "../image/project3.jpg";
import project4 from "../image/project4.jpg";
import project5 from "../image/project5.jpg";
import project6 from "../image/project6.jpg";
import Button from "../components/Button";

const Project = () => {
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
    <>
      <Arrow link="/projects" text="Back to Projects" />
      <section className="project container">
        <div className="project__image-wrapper">
          <img className="project__image-hero" src={projectHero} alt="human" />
          <h1 className="project__title">
            Dancing in<br></br> Black & White
          </h1>
        </div>
        <ul className="project__list">
          <li className="project__item">
            <h3 className="project__item-name">About</h3>
            <ul className="text__list">
              <li className="text__list-item">
                <p className="text__list-description">
                  Massa vitae tortor condimentum lacinia quis vel eros donec. In
                  fermentum et sollicitudin ac orci phasellus egestas tellus
                  rutrum. Congue nisi vitae suscipit tellus mauris a diam
                  maecenas. Vestibulum morbi blandit cursus risus at ultrices mi
                  tempus imperdiet. Sit amet aliquam id diam maecenas ultricies
                  mi eget. Tortor id aliquet lectus proin. Varius quam quisque
                  id diam vel quam elementum pulvinar.
                </p>
              </li>
              <li className="text__list-item">
                <p className="text__list-description">
                  Massa vitae tortor condimentum lacinia quis vel eros donec. In
                  fermentum et sollicitudin ac orci phasellus egestas tellus
                  rutrum. Congue nisi vitae suscipit tellus mauris a diam
                  maecenas. Vestibulum morbi blandit cursus risus at ultrices mi
                  tempus imperdiet. Sit amet aliquam id diam maecenas ultricies
                  mi eget. Tortor id aliquet lectus proin. Varius quam quisque
                  id diam vel quam elementum pulvinar.
                </p>
              </li>
              <li className="text__list-item">
                <p className="text__list-description">
                  Massa vitae tortor condimentum lacinia quis vel eros donec. In
                  fermentum et sollicitudin ac orci phasellus egestas tellus
                  rutrum. Congue nisi vitae suscipit tellus mauris a diam
                  maecenas. Vestibulum morbi blandit cursus risus at ultrices mi
                  tempus imperdiet. Sit amet aliquam id diam maecenas ultricies
                  mi eget. Tortor id aliquet lectus proin. Varius quam quisque
                  id diam vel quam elementum pulvinar.
                </p>
              </li>
            </ul>
          </li>
          <li className="project__item">
            <h3 className="project__item-name">Details</h3>
            <ul className="details__list">
              <li className="details__list-item">
                <p className="details__list-name">Year</p>
                <p className="details__list-description">2022</p>
              </li>
              <li className="details__list-item">
                <p className="details__list-name">Service</p>
                <p className="details__list-description">Photo Shooting</p>
              </li>
              <li className="details__list-item">
                <p className="details__list-name">Client</p>
                <p className="details__list-description">Jonathan Åberg </p>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="project__images">
          <li className="project__images-item">
            <img className="project__image" src={project1} alt="human" />
          </li>
          <li className="project__images-item">
            <img className="project__image" src={project2} alt="human" />
          </li>
          <li className="project__images-item">
            <img className="project__image" src={project3} alt="human" />
          </li>
          <li className="project__images-item">
            <img className="project__image" src={project4} alt="human" />
          </li>
          <li className="project__images-item">
            <img className="project__image" src={project5} alt="human" />
          </li>
        </ul>
        <div className="next">
          <p className="next__subtitle">Next Project</p>
          <h2 className="next__title">Fashion Week</h2>
          <div className="next__image-wrapper">
            <img className="next__image" src={project6} alt="human" />
            <div className="next__button">
              <Button
                text="Discover"
                circleStyle={circleStyle}
                buttonStyle={buttonStyle}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

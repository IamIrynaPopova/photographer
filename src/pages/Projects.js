import React from "react";
import Button from "../components/Button";
import LetIsWork from "../components/LetIsWork";
import imageWork1 from "../image/work1.jpg";
import imageWork2 from "../image/work2.jpg";
import imageWork3 from "../image/work3.jpg";
import imageWork4 from "../image/work4.jpg";
import imageWork5 from "../image/work5.jpg";
import imageWork6 from "../image/work6.jpg";
import imageWork7 from "../image/work7.jpg";
import { NavLink } from "react-router-dom";

const Projects = () => {
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
      <section className="projects container">
        <div className="projects__title-box">
          <div className="projects__title-wrapper">
            <h1 className="projects__title">Projects</h1>
            <p className="projects__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <Button
            text="Get in Touch"
            circleStyle={circleStyle}
            buttonStyle={buttonStyle}
          />
        </div>

        <ul className="projects__list">
          <li className="projects__item">
            <h2 className="projects__name">
              Dancing <br></br>in Black &<span> White</span>
            </h2>
            <div className="projects__image-wrapper">
              <img className="projects__image" src={imageWork1} alt="human" />
              <NavLink className="projects__button" to="/projects/dancing">
                View
              </NavLink>
            </div>
            <p className="projects__place">
              New York <br></br> October 2021
            </p>
          </li>
          <li className="projects__item">
            <h2 className="projects__name">
              Style<span> & Fashion</span>
            </h2>
            <div className="projects__image-wrapper">
              <img className="projects__image" src={imageWork2} alt="human" />
              <NavLink className="projects__button" to="/projects/fashion">
                View
              </NavLink>
            </div>
            <p className="projects__place">
              New York <br></br> October 2021
            </p>
          </li>
          <li className="projects__item">
            <h2 className="projects__name">
              One<span> Eye</span>
            </h2>
            <div className="projects__image-wrapper">
              <img className="projects__image" src={imageWork4} alt="human" />
              <NavLink className="projects__button" to="/projects/eye">
                View
              </NavLink>
            </div>
            <p className="projects__place">
              New York <br></br> October 2021
            </p>
          </li>
          <li className="projects__item">
            <h2 className="projects__name">
              Week <span>Fashion</span>
            </h2>
            <div className="projects__image-wrapper">
              <img className="projects__image" src={imageWork3} alt="human" />
              <NavLink className="projects__button" to="/projects/fashion">
                View
              </NavLink>
            </div>
            <p className="projects__place">
              New York <br></br> October 2021
            </p>
          </li>
          <li className="projects__item">
            <h2 className="projects__name">
              Be <span> Silent</span>
            </h2>
            <div className="projects__image-wrapper">
              <img className="projects__image" src={imageWork5} alt="human" />
              <NavLink className="projects__button" to="/projects/silent">
                View
              </NavLink>
            </div>
            <p className="projects__place">
              New York <br></br> October 2021
            </p>
          </li>
          <li className="projects__item">
            <h2 className="projects__name">
              Cigarette <span>& Tobacco</span>
            </h2>
            <div className="projects__image-wrapper">
              <img className="projects__image" src={imageWork6} alt="human" />
              <NavLink className="projects__button" to="/projects/cigarette">
                View
              </NavLink>
            </div>
            <p className="projects__place">
              New York <br></br> October 2021
            </p>
          </li>
          <li className="projects__item">
            <h2 className="projects__name">
              Wonderful <span>Body</span>
            </h2>
            <div className="projects__image-wrapper">
              <img className="projects__image" src={imageWork7} alt="human" />
              <NavLink className="projects__button" to="/projects/body">
                View
              </NavLink>
            </div>
            <p className="projects__place">
              New York <br></br> October 2021
            </p>
          </li>
        </ul>
      </section>
      <LetIsWork />
    </>
  );
};

export default Projects;

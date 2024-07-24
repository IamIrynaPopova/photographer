import React from "react";
import Button from "../components/Button";
import imageWork1 from "../image/work1.jpg";
import imageWork2 from "../image/work2.jpg";
import imageWork3 from "../image/work3.jpg";
import imageWork4 from "../image/work4.jpg";
import imageWork5 from "../image/work5.jpg";
import imageWork6 from "../image/work6.jpg";
import imageWork7 from "../image/work7.jpg";

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
          <img className="projects__image" src={imageWork1} alt="human" />
          <p className="projects__place">
            New York <br></br> October 2021
          </p>
        </li>
        <li className="projects__item">
          <h2 className="projects__name">
            Style<span> & Fashion</span>
          </h2>
          <img className="projects__image" src={imageWork2} alt="human" />
          <p className="projects__place">
            New York <br></br> October 2021
          </p>
        </li>
        <li className="projects__item">
          <h2 className="projects__name">
            One<span> Eye</span>
          </h2>
          <img className="projects__image" src={imageWork4} alt="human" />
          <p className="projects__place">
            New York <br></br> October 2021
          </p>
        </li>
        <li className="projects__item">
          <h2 className="projects__name">
            Week <span>Fashion</span>
          </h2>
          <img className="projects__image" src={imageWork3} alt="human" />
          <p className="projects__place">
            New York <br></br> October 2021
          </p>
        </li>
        <li className="projects__item">
          <h2 className="projects__name">
            Be <span> Silent</span>
          </h2>
          <img className="projects__image" src={imageWork5} alt="human" />
          <p className="projects__place">
            New York <br></br> October 2021
          </p>
        </li>
        <li className="projects__item">
          <h2 className="projects__name">
            Cigarette <span>& Tobacco</span>
          </h2>
          <img className="projects__image" src={imageWork6} alt="human" />
          <p className="projects__place">
            New York <br></br> October 2021
          </p>
        </li>
        <li className="projects__item">
          <h2 className="projects__name">
            Wonderful <span>Body</span>
          </h2>
          <img className="projects__image" src={imageWork7} alt="human" />
          <p className="projects__place">
            New York <br></br> October 2021
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;

import React from "react";
import Button from "../components/Button";
import imageWork1 from "../image/work1.jpg";
import imageWork2 from "../image/work2.jpg";
import imageWork3 from "../image/work3.jpg";
import imageWork4 from "../image/work4.jpg";

const Projects = () => {
  return (
    <section className="projects container">
      <div className="projects__title-wrapper">
        <h2 className="projects__title">
          Latest<span> Work</span>
        </h2>
        <p className="projects__subtitle"></p>
      </div>
      <Button text="Get in Touch" />

      <ul className="work__list">
        <li className="work__item">
          <h3 className="work__name">
            Dancing <br></br>in Black &<span> White</span>
          </h3>
          <img className="work__image" src={imageWork1} alt="human" />
          <p className="work__place">
            New York <br></br> October 2021
          </p>
        </li>
        <li className="work__item">
          <h3 className="work__name">
            Style<span> & Fashion</span>
          </h3>
          <img className="work__image" src={imageWork2} alt="human" />
          <p className="work__place">
            New York <br></br> October 2021
          </p>
        </li>
        <li className="work__item">
          <h3 className="work__name">
            Week<span> Fashion</span>
          </h3>
          <img className="work__image" src={imageWork3} alt="human" />
          <p className="work__place">
            New York <br></br> October 2021
          </p>
        </li>
        <li className="work__item">
          <h3 className="work__name">
            One<span> Eye</span>
          </h3>
          <img className="work__image" src={imageWork4} alt="human" />
          <p className="work__place">
            New York <br></br> October 2021
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;

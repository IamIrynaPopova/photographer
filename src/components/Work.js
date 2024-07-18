import React from "react";
import ViewAll from "./ViewAll";
import imageWork1 from "../image/work1.jpg"
import imageWork2 from "../image/work2.jpg";
import imageWork3 from "../image/work3.jpg";
import imageWork4 from "../image/work4.jpg";


const Work = () => {
  return (
    <section className="work container">
      <div className="work__title-wrapper">
        <h2 className="work__title">
          Latest<span> Work</span>
        </h2>
       <ViewAll/>
      </div>
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

export default Work;

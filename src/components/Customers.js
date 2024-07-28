import React from "react";
import { NavLink } from "react-router-dom";
import sprite from "../image/sprite/sprite.svg";
import customer1 from "../image/customer1.jpg";
import customer2 from "../image/customer2.jpg";
import customer3 from "../image/customer3.jpg";

const Customers = () => {
  return (
    <section className="customers container">
      <div className="customers__title-wrapper">
        <h2 className="customers__title">
          What my <br></br>Clients <span>Say</span>
        </h2>
        <p className="customers__description">
          Worked with Over<span> 50 clients </span>around the world
        </p>
        <NavLink type="button" className="customers__button" to="/about">
          Work With Me 
          <svg className="customers__button-svg">
            <use href={`${sprite}#arrow-right-red`}></use>
          </svg>
        </NavLink>
      </div>
      <ul className="customers__list">
        <li className="customers__item">
          <img className="customers__image" src={customer1} alt="human" />
          <div>
            <div className="customers__subtitle-wrapper">
              <svg className="customers__svg">
                <use href={`${sprite}#brackets`}></use>
              </svg>
              <h3 className="customers__subtitle">
                I Really Enjoyed Working With Jacob
              </h3>
            </div>
            <p className="customers__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra. Laoreet sit amet cursus sit amet dictum sit amet justo.{" "}
            </p>
            <p className="customers__name">
              Michelle Lindstr<span className="customers__line"></span>
              Photoshoot
            </p>
          </div>
        </li>
        <li className="customers__item">
          <img className="customers__image" src={customer2} alt="human" />
          <div>
            <div className="customers__subtitle-wrapper">
              <svg className="customers__svg">
                <use href={`${sprite}#brackets`}></use>
              </svg>
              <h3 className="customers__subtitle">
                I Really Enjoyed Working With Jacob
              </h3>
            </div>
            <p className="customers__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="customers__name">
              Jannis Jackson<span className="customers__line"></span>
              Art Direction
            </p>
          </div>
        </li>
        <li className="customers__item">
          <img className="customers__image" src={customer3} alt="human" />
          <div>
            <div className="customers__subtitle-wrapper">
              <svg className="customers__svg">
                <use href={`${sprite}#brackets`}></use>
              </svg>
              <h3 className="customers__subtitle">
                I Really Enjoyed Working With Jacob
              </h3>
            </div>
            <p className="customers__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              lobortis scelerisque fermentum dui faucibus in ornare quam
              viverra.
            </p>
            <p className="customers__name">
              Daniela Berg<span className="customers__line"></span>
              Video Editing
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Customers;

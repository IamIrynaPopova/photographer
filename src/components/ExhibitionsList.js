import React from "react";
import exhibitions1 from "../image/exhibitions1.jpg";
import exhibitions2 from "../image/exhibitions2.jpg";
import exhibitions3 from "../image/exhibitions3.jpg";
import sprite from "../image/sprite/sprite.svg";

const ExhibitionsList = () => {
  return (
    <ul className="exhibitions__list">
      <li className="exhibitions__item">
        <img className="exhibitions__image" src={exhibitions1} alt="human" />
        <div className="exhibitions__exposition">
          <p className="exhibitions__place">
            New York<span className="exhibitions__line"></span>Town Hall
            <span className="exhibitions__line"></span>2022
          </p>
          <h3 className="exhibitions__name">
            Independent<span>Beauty</span>
          </h3>
          <p className="exhibitions__description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="exhibitions__arrow">
          <p className="exhibitions__arrow-text">Buy Ticket</p>
          <svg className="exhibitions__svg">
            <use href={`${sprite}#arrow-up`}></use>
          </svg>
        </div>
        <div className="exhibitions__date">
          <p className="exhibitions__month">Jun</p>
          <p className="exhibitions__number">16</p>
        </div>
      </li>
      <li className="exhibitions__item">
        <img className="exhibitions__image" src={exhibitions2} alt="human" />
        <div className="exhibitions__exposition">
          <p className="exhibitions__place">
            Berlin<span className="exhibitions__line"></span>Kunsthalle
            <span className="exhibitions__line"></span>2022
          </p>
          <h3 className="exhibitions__name">
            In Humanity We<span>Trust</span>
          </h3>
          <p className="exhibitions__description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </p>
        </div>
        <div className="exhibitions__arrow">
          <p className="exhibitions__arrow-text">Buy Ticket</p>
          <svg className="exhibitions__svg">
            <use href={`${sprite}#arrow-up`}></use>
          </svg>
        </div>
        <div className="exhibitions__date">
          <p className="exhibitions__month">Mar</p>
          <p className="exhibitions__number">02</p>
        </div>
      </li>
      <li className="exhibitions__item">
        <img className="exhibitions__image" src={exhibitions3} alt="human" />
        <div className="exhibitions__exposition">
          <p className="exhibitions__place">
            Berlin<span className="exhibitions__line"></span>Kunsthalle
            <span className="exhibitions__line"></span>2022
          </p>
          <h3 className="exhibitions__name">
            Berlin AT<span>Night</span>
          </h3>
          <p className="exhibitions__description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
          </p>
        </div>
        <div className="exhibitions__arrow">
          <p className="exhibitions__arrow-text">Buy Ticket</p>
          <svg className="exhibitions__svg">
            <use href={`${sprite}#arrow-up`}></use>
          </svg>
        </div>
        <div className="exhibitions__date">
          <p className="exhibitions__month">Feb</p>
          <p className="exhibitions__number">01</p>
        </div>
      </li>
    </ul>
  );
};

export default ExhibitionsList;

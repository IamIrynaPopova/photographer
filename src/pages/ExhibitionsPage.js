import React from "react";
import ExhibitionsList from "../components/ExhibitionsList";
import LetIsWork from "../components/LetIsWork";
import sprite from "../image/sprite/sprite.svg";
import exhibitions4 from "../image/exhibitions4.jpg";
import exhibitions5 from "../image/exhibitions5.jpg";
import exhibitions6 from "../image/exhibitions6.jpg";

const ExhibitionsPage = () => {
  return (
    <>
      <section className="exhibitions-page container">
        <div className="exhibitions-page__title-wrapper">
          <h1 className="exhibitions-page__title">Exhibitions</h1>
          <p className="exhibitions-page__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="exhibitions-page__arrow">
            <svg className="exhibitions-page__svg">
              <use href={`${sprite}#arrow-down`}></use>
            </svg>
            <p className="exhibitions-page__arrow-text">
              Check Out<br></br>The Dates
            </p>
          </div>
        </div>
        <h2 className="exhibitions-page__subtitle">
          Current <span>Exhibitions</span>
        </h2>
        <div className="exhibitions-page__list">
          <ExhibitionsList />
        </div>
        <div className="exhibitions-page__border"></div>
        <div className="exhibitions-page__list">
          <ul className="exhibitions__list">
            <li className="exhibitions__item">
              <img
                className="exhibitions__image"
                src={exhibitions4}
                alt="human"
              />
              <div className="exhibitions__exposition">
                <p className="exhibitions__place">
                  New York<span className="exhibitions__line"></span>Town Hall
                  <span className="exhibitions__line"></span>2022
                </p>
                <h3 className="exhibitions__name">
                  Independent<span>Beauty</span>
                </h3>
                <p className="exhibitions__description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
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
              <img
                className="exhibitions__image"
                src={exhibitions5}
                alt="human"
              />
              <div className="exhibitions__exposition">
                <p className="exhibitions__place">
                  Berlin<span className="exhibitions__line"></span>Kunsthalle
                  <span className="exhibitions__line"></span>2022
                </p>
                <h3 className="exhibitions__name">
                  In Humanity We<span>Trust</span>
                </h3>
                <p className="exhibitions__description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
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
              <img
                className="exhibitions__image"
                src={exhibitions6}
                alt="human"
              />
              <div className="exhibitions__exposition">
                <p className="exhibitions__place">
                  Berlin<span className="exhibitions__line"></span>Kunsthalle
                  <span className="exhibitions__line"></span>2022
                </p>
                <h3 className="exhibitions__name">
                  Berlin AT<span>Night</span>
                </h3>
                <p className="exhibitions__description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
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
        </div>
      </section>
      <LetIsWork />
    </>
  );
};

export default ExhibitionsPage;

import React from "react";
import sprite from "../image/sprite/sprite.svg";
import Arrow from "../components/Arrow";
import exhibition from "../image/exhibition.png";
import LetIsWork from "../components/LetIsWork";

const Exhibition = () => {
  return (
    <>
      <Arrow link="/exhibitions" text="Back to Exhibitions" />
      <section className="exhibition container">
        <div className="exhibition__image-wrapper">
          <p className="exhibition__text">16 Jun 2022</p>
          <h1 className="exhibition__title">Independent Beauty</h1>
          <img className="exhibition__image" src={exhibition} alt="human" />
        </div>
        <div className="exhibition__description">
          <button className="exhibition__button" type="button">
            Get Tickets
            <svg className="exhibition__button-svg">
              <use href={`${sprite}#arrow-right`}></use>
            </svg>
          </button>
          <div className="exhibition__box">
            <ul className="exhibition__box-list">
              <li className="exhibition__box-item">
                <h2 className="exhibition__box-title">About</h2>
                <ul className="exhibition__list">
                  <li className="exhibition__list-item">
                    <p className="exhibition__list-text">
                      Massa vitae tortor condimentum lacinia quis vel eros
                      donec. In fermentum et sollicitudin ac orci phasellus
                      egestas tellus rutrum. Congue nisi vitae suscipit tellus
                      mauris a diam maecenas. Vestibulum morbi blandit cursus
                      risus at ultrices mi
                    </p>
                  </li>
                  <li className="exhibition__list-item">
                    <p className="exhibition__list-text">
                      Massa vitae tortor condimentum lacinia quis vel eros
                      donec. In fermentum et sollicitudin ac orci phasellus
                      egestas tellus rutrum. Congue nisi vitae suscipit tellus
                      mauris a diam maecenas. Vestibulum morbi blandit cursus
                      risus at ultrices mi
                    </p>
                  </li>
                  <li className="exhibition__list-item">
                    <p className="exhibition__list-text">
                      Massa vitae tortor condimentum lacinia quis vel eros
                      donec. In fermentum et sollicitudin ac orci phasellus
                      egestas tellus rutrum. Congue nisi vitae suscipit tellus
                      mauris a diam maecenas. Vestibulum morbi blandit cursus
                      risus at ultrices mi
                    </p>
                  </li>
                </ul>
              </li>
              <li className="exhibition__box-item">
                <h2 className="exhibition__box-title">Information</h2>
                <ul className="information__list">
                  <li className="information__list-item">
                    <p className="information__list-name">Date</p>
                    <p className="information__list-description">
                      16 Jun 2022 - 18 Oct 2022
                    </p>
                  </li>
                  <li className="information__list-item">
                    <p className="information__list-name">Opening Hours</p>
                    <p className="information__list-description">
                      Monday to Saturday from 11 pm to 6 pm
                    </p>
                  </li>
                  <li className="information__list-item">
                    <p className="information__list-name">Location</p>
                    <p className="information__list-description">Art Studio</p>
                  </li>
                  <li className="information__list-item">
                    <p className="information__list-name">Address</p>
                    <p className="information__list-description">
                      Main Street 2, 12101 Berlin
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <LetIsWork />
    </>
  );
};

export default Exhibition;

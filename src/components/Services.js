import React from "react";

const Services = () => {
  return (
    <section className="services container">
      <div className="services__arrow-wrapper">
        <div className="services__arrow"></div>
        <p className="services__text">Services</p>
      </div>
      <ol className="services__list">
        <li className="services__item">
          <div className="services__item-wrapper">
            <h3 className="services__subtitle">Photo Shooting</h3>
            <p className="services__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </li>
        <li className="services__item">
          <div className="services__item-wrapper">
            <h3 className="services__subtitle">Video Editing</h3>
            <p className="services__description">
              pharetra magna ac placerat vestibulum lectus mauris ultrices eros
              in cursus turpis massa tincidunt dui ut ornare lectus sit amet est
              placerat in egestas erat imperdiet sed euismod nisi porta lorem
              mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu
              nisl nunc mi ipsum faucibus vitae aliquet nec
            </p>
          </div>
        </li>
        <li className="services__item">
          <div className="services__item-wrapper">
            <h3 className="services__subtitle">Art Direction</h3>
            <p className="services__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Services;

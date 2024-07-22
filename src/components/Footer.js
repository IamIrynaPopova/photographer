import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
    <footer className="footer container">
      <div className="footer__title-wrapper">
        <div className="footer__button-wrapper">
          <Button
            text="Get in Touch"
            circleStyle={circleStyle}
            buttonStyle={buttonStyle}
          />
        </div>
        <h2 className="footer__title">
          Let’s Work <span>Together</span>
        </h2>
      </div>
      <div className="footer__box">
        <div className="footer__subtitle-wrapper">
          <h3 className="footer__subtitle">Jacob Grønberg</h3>
          <p className="footer__description">Photograph & Visual Artist</p>
        </div>
        <nav className="footer__menu-wrapper">
          <p className="footer__menu-text">Menu</p>
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <NavLink className="footer__menu-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink className="footer__menu-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="">
                Exhibitions
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="">
                About
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__info-wrapper">
          <p className="footer__info-text">Info</p>
          <ul className="footer__info">
            <li className="footer__info-item">Styleguide</li>
            <li className="footer__info-item">Licensing</li>
            <li className="footer__info-item">Changelog</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
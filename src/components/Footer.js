import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container">
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
              <NavLink className="footer__menu-link" to="/exhibitions">
                Exhibitions
              </NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink className="footer__menu-link" to="/about">
                About
              </NavLink>
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

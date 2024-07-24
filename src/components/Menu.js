import React from "react";
import sprite from "../image/sprite/sprite.svg";
import { NavLink } from "react-router-dom";

const Menu = ({onClose}) => {
  return (
    <div id="menu" className="menu ">
      <div className="menu__header">
        <p className="menu__author">Jacob Grönberg</p>
        <button type="button" className="menu__button" onClick={onClose}>
          <svg className="menu__svg">
            <use href={`${sprite}#menu-button`}></use>
          </svg>
        </button>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink className="nav-list-link" to="/" onClick={onClose}>
              Home
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink className="nav-list-link" to="/projects" onClick={onClose}>
              Projects
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              className="nav-list-link"
              to="/exhibitions"
              onClick={onClose}
            >
              Exhibitions
            </NavLink>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="">
              About
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

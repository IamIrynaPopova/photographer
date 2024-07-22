import React from "react";
import sprite from "../image/sprite/sprite.svg";

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
            <a className="nav-list-link" href="">
              Home
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="">
              Projects
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="">
              Exhibitions
            </a>
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

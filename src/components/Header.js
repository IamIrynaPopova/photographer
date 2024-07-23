import React from "react";
import { NavLink } from "react-router-dom";
import sprite from "../image/sprite/sprite.svg";
import Menu from "./Menu";


const Header = ({ onCloseButton, onShowButton }) => {
  return (
    <header className="header">
      <NavLink className="header__author" to="/">
        Jacob Grönberg
      </NavLink>
      <div className="header__icon">
        <button type="button" className="header__button" onClick={onShowButton}>
          <svg className="header__svg">
            <use href={`${sprite}#icon-menu-toggle`}></use>
          </svg>
        </button>
      </div>
      <Menu onClose={onCloseButton} />
    </header>
  );
};
export default Header;

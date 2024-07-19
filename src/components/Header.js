import React from "react";
import sprite from "../image/sprite/sprite.svg";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="header">
      <p className="header__author">Jacob Grönberg</p>
      <div className="header__icon">
        <svg className="header__svg">
          <use href={`${sprite}#icon-menu-toggle`}></use>
        </svg>
      </div>
        <Menu />
    </header>
  );
};
export default Header;

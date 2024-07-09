import React from "react";

const Header = () => {
  return (
    <header className="header">
      <p className="header__author">Jacob Grönberg</p>
      <div className="header__icon">
        <svg className="header__svg">
          <use href="./image/sprite/sprite.svg#icon-menu-toggle"></use>
        </svg>
      </div>
    </header>
  );
};
export default Header;

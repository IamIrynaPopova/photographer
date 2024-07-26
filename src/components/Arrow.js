import React from "react";
import sprite from "../image/sprite/sprite.svg";
import { NavLink } from "react-router-dom";

const Arrow = ({ link, text }) => {
  return (
    <>
      <NavLink className="arrow__back" to={link}>
        <svg className="arrow__back-svg">
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
        <p className="arrow__back-text">{text}</p>
      </NavLink>
    </>
  );
};

export default Arrow;

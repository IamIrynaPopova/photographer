import React from "react";
import sprite from "../image/sprite/sprite.svg";
import { NavLink } from "react-router-dom";

const ViewAll = ({link}) => {
        return (
          <NavLink className="arrow" to={link}>
            <p className="arrow__text">View All</p>
            <svg className="arrow__svg">
              <use href={`${sprite}#arrow-right`}></use>
            </svg>
          </NavLink>
        );
}

export default ViewAll;
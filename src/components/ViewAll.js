import React from "react";
import sprite from "../image/sprite/sprite.svg";

const ViewAll = () => {
        return (
          <div className="arrow">
            <p className="arrow__text">View All</p>
            <svg className="arrow__svg">
              <use href={`${sprite}#arrow-right`}></use>
            </svg>
          </div>
        );
}

export default ViewAll;
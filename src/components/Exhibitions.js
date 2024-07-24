import React from "react";
import ViewAll from "./ViewAll";
import ExhibitionsList from "./ExhibitionsList";

const Exhibitions = () => {
  return (
    <section className="exhibitions container">
      <div className="exhibitions__title-wrapper">
        <h2 className="exhibitions__title">
          Exhibitions<span>‘22</span>
        </h2>
        <ViewAll link="/exhibitions"/>
      </div>
      <ExhibitionsList />
    </section>
  );
};

export default Exhibitions;

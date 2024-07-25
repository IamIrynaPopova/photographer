import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Exhibitions from "../components/Exhibitions";
import Customers from "../components/Customers";
import LetIsWork from "../components/LetIsWork";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Exhibitions />
      <Customers />
      <LetIsWork/>
    </>
  );
};

export default Home;

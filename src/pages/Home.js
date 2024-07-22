import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";
import Exhibitions from "../components/Exhibitions";
import Customers from "../components/Customers";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Exhibitions />
      <Customers />
    </>
  );
};

export default Home;

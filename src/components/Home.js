import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Work from "./Work";
import Exhibitions from "./Exhibitions";
import Customers from "./Customers";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Work />
        <Exhibitions />
        <Customers />
      </main>
    </>
  );
};

export default Home;

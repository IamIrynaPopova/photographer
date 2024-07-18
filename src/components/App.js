import React from "react";
import Header from "./Header";
import Main from "./Main";
import Hero from "./Hero";
import Services from "./Services";
import Work from "./Work";
import Exhibitions from "./Exhibitions";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Services />
        <Work />
        <Exhibitions/>
      </Main>
    </>
  );
};

export default App;

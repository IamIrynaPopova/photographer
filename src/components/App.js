import React from "react";
import Header from "./Header";
import Main from "./Main";
import Hero from "./Hero";
import Services from "./Services";
import Work from "./Work";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Services />
        <Work />
      </Main>
    </>
  );
};

export default App;

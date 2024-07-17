import React from "react";
import Header from "./Header";
import Main from "./Main";
import Hero from "./Hero";
import Services from "./Services";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Services/>
      </Main>
    </>
  );
};

export default App;

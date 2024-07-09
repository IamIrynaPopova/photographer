import React from "react";
import Header from "./Header";
import Main from "./Main";
import Hero from "./Hero";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
      </Main>
    </>
  );
};

export default App;

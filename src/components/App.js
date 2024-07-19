import React from "react";
import Header from "./Header";
import Main from "./Main";
import Hero from "./Hero";
import Services from "./Services";
import Work from "./Work";
import Exhibitions from "./Exhibitions";
import Customers from "./Customers";
import Footer from "./Footer";


const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Services />
        <Work />
        <Exhibitions />
        <Customers/>
      </Main>
      <Footer />
    </>
  );
};

export default App;

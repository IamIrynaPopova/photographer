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
  const onCloseMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.remove("menu__show");
  };

  const onShowMenu = (e) => {
    const menu = document.getElementById("menu");
    menu.classList.add("menu__show");
  };
  return (
    <>
      <Header onCloseButton={onCloseMenu} onShowButton={onShowMenu} />
      <Main>
        <Hero />
        <Services />
        <Work />
        <Exhibitions />
        <Customers />
      </Main>
      <Footer />
    </>
  );
};

export default App;

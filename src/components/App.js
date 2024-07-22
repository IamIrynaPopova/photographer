import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Projects from "./Projects";

const App = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

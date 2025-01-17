import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageLoader from "../pages/PageLoader";
const Home = lazy(() => import("../pages/Home"));
const Projects = lazy(() => import("../pages/Projects"));
const ExhibitionsPage = lazy(() => import("../pages/ExhibitionsPage"));
const About = lazy(() => import("../pages/About"));
const Project = lazy(() => import("../pages/Project"));
const Exhibition = lazy(() => import("../pages/Exhibition"));

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
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<Project />} />
            <Route path="/exhibitions" element={<ExhibitionsPage />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;

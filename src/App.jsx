// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Dashboard from "./components/Dashboard/Dashboard";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";



const App = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in",
      delay: 100,
      duration: 700,
      offset: 100,
    });
  }, []);

  

  return (
    <main>
    <div className="overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
    </main>
  );
};

export default App;


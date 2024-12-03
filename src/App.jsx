import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
// import Menu from "./components/Menu/Menu";
// import Dashboard from "./components/Dashboard/Dashboard";


const App = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in",
      delay: 100,
      duration: 700,
      offset: 100,
    });
  }, []);

  const [showPopup, setShowPopup] = React.useState(false);

  const HandlePopup = () => {
    console.log("HandlePopup called");
    setShowPopup(true);
  };

  console.log("showPopup state:", showPopup);

  return (
    <main>
    <div className="overflow-x-hidden">
        <NavBar />
      <Home />
        <Services />
        <AppStore />
        <Banner />
        {/* <Menu/> */}
      {/* <Routes>
          <Route path="Menu" element={<Menu />} />
      </Routes> */}
      <Footer HandlePopup={HandlePopup} />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
    </main>
  );
};

export default App;


// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init(
      {
        easing: "ease-in",
        delay: 100,
        duration: 700,
        offset: 100,
      }
    );
  });
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Home />
      <Services />
      <AppStore/>
      <Banner/>
      <Footer/>
      
      {/* <About/>
            
            <Contact/> */}
    </div>
  );
};

  export default App;


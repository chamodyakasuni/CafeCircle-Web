import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

import HeroImg from "../../assets/HeroImage.png";
import Services from "../Services/Services";
import AppStore from "../AppStore/AppStore";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const navigate = useNavigate();
  const OrderBtnClick = () => {
    navigate('/menu');
  };

  return (
    <div>
    <Navbar/>
    <SideBar/>
      {/* Hero Section */}
      <div
        className="min-h-screen sm:min-h-[750px] 
          bg-brandDark flex justify-center items-center text-white"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text Section */}
            <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white/80"
              >
                We serve the richest{" "}
                <span className="text-primary font-cursive">Coffee</span> &
                <span className="text-primary font-cursive"> Beans</span> in the city
              </motion.h1>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="flex justify-start"
              >
                <button
                  onClick={OrderBtnClick}
                  className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-6 py-3 text-white font-semibold hover:scale-105 transition duration-200"
                >
                  Coffee And Bean
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div
              data-aos="zoom-in"
              className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative"
            >
              <img
                src={HeroImg}
                alt="Coffee"
                className="w-[300px] sm:w-[450px] mx-auto spin drop-shadow-xl"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl"
              >
                <h1>Best Bean</h1>
              </div>
              <div
                data-aos="fade-right"
                className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl"
              >
                <h1>Best Coffee</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* App Store Section */}
      <AppStore />

      {/* Banner Section */}
      <Banner />

      {/* Footer Section */}
      <Footer handlePopup={handlePopup} />

      {/* Popup Modal */}
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import PropTypes from 'prop-types';

const Menus = [
  {  
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "Services",
    link: "#services",
  },
  {
    id: 3,
    name: "About",
    link: "#about",
  },
  {
    id: 4,
    name: "Dashboard",
    link: "#dashboard",
  },
];

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-secondary to-secondary/100 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          {/* logo section */}
          <div data-aos="fade-down" data-aos-once="true">
          <a href="#" 
          className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive">
            <img src={Logo} alt="Logo" className="w-14" />
            Cafe Circle
          </a>
          </div>
          {/* links section */}
          <div 
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((data) => (
                <li key={data.id}>
                  <a 
                    href={data.link} 
                    className="inline-block text-xl py-4 px-4 
                    text-white/70 
                    hover:text-white 
                    duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
           
              {/* <GiHamburgerMenu className="text-3xl cursor-pointer" /> */}
            </div>
          </div>
        </div>
      
    </nav>
  );
};

NavBar.propTypes = {
  setSidebar: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  setSidebar: () => {},
};

export default NavBar;
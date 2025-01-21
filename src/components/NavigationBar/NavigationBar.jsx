// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Logo from "../../assets/website/coffee_logo.png";
import { BiRightArrow } from 'react-icons/bi';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  SendToBack,
  ShoppingCart,
  User,
  Settings,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const navLinks = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: User },
  { name: "Products", path: "/product", icon: ShoppingCart },
  { name: "Orders", path: "/orders", icon: SendToBack },
  { name: "Customers", path: "/customers", icon: User },
  { name: "Settings", path: "/settings", icon: Settings },
];


const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" }
};

const NavigationBar = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      width: '250px',
      showCancelButton: true,
      confirmButtonColor: '#8b4513',
      cancelButtonColor: '#d33',
      customClass: {
        title: 'text-sm',
        popup: 'text-sm',
      },
      confirmButtonText: 'Yes, log out!'

    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Logged out");
        navigate('/home');
      }
    });
  };
  const handleNavLinkClick = (path, index) => {
    setActiveNavIndex(index);
    navigate(path);
  };

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={'py-12 flex flex-col border border-r-1 w-1/4 h-screen relative'}>
      <div className='font-bold logo-div flex space-x-3 items-center'>
        <img src={Logo} className="w-14" />
        <span className={isExpanded ? "block" : "hidden"}>
          Cafe Circle
        </span>
      </div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-5 h-5 bg-lightBrown rounded-full 
        absolute -right-[10.5px] top-16 flex items-center justify-center text-white'
      >
        <BiRightArrow className="w-[10px]" />
      </div>

      <div className='mt-10 flex flex-col space-y-8 flex-grow cursor-pointer'>
        {navLinks.map((item, index) => (
          <div 
            key={index} 
            onClick={() => handleNavLinkClick(item.path, index)} 
            className={`flex space-x-2 ${activeNavIndex === index ? "bg-lightBrown text-white font-semibold rounded" : ""}`}
          >
            <item.icon />
            <span 
              className={`${isExpanded ? "block" : "hidden"} ${activeNavIndex === index ? "text-white" : ""}`}
            >
              {item?.name}
            </span>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className='text-black px-2 py-2 rounded-full hover:bg-lightBrown transition
                      hover:scale-105 duration-200 mb-4 mt-auto flex items-center space-x-2 cursor-pointer font-serif '
        onClick={handleLogout}>
        <LogOut className={!isExpanded ? " bg-lightBrown rounded-full w-8 h-8" : ""} />
        <span className={isExpanded ? "block" : "hidden"}>Logout</span>
      </div>
    </motion.div>
  )
}

export default NavigationBar;
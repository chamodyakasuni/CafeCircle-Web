// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Logo from "../../assets/website/coffee_logo.png";
import { BiRightArrow } from 'react-icons/bi';
import {motion} from 'framer-motion';
import {
    LayoutDashboard, 
    SendToBack, 
    ShoppingCart, 
    User, 
    Settings
} from 'lucide-react';


const navLinks = [
  {
    name: "Dashboard",
        icon:LayoutDashboard,
  },
  {
    name: "Orders",
    icon: SendToBack,
  },
  {
    name: "Products",
    icon: ShoppingCart,
  },
  {
    name: "Customers",
    icon: User,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];
const variants = {
    expanded: {width:"20%"},
    nonExpanded: {width:"5%"}
};

function NavigationBar() {
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);
  return (
    <motion.div 
    animate= {isExpanded ? "expanded" : "nonExpanded"}
    variants={variants}
    className={'py-12 flex flex-col border border-r-1 w-1/4 h-screen relative'}>
        <div className='font-bold logo-div flex space-x-3 items-center'>
              <img src={Logo} className="w-14" />
            <span className={isExpanded ? "block" : "hidden" }>
            Cafe Circle
            </span>
        </div>
        <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-5 h-5 bg-primary rounded-full 
        absolute -right-[10.5px] top-16 flex items-center justify-center text-white'
        >
              <BiRightArrow className="w-[10px]" />  
        </div>


        <div className='mt-10 flex flex-col space-y-8'>
            {navLinks.map((item, index) => (
                <div key={index} onClick={() => setActiveNavIndex(index)} className={'flex space-x-2' + (activeNavIndex == index 
                ? " bg-primary text-white font-semibold rounded " 
                : " ")
                }
                >
                <item.icon/>
                    <span className={isExpanded ? "block" : "hidden"}>{item?.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default NavigationBar
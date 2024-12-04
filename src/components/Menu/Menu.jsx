// eslint-disable-next-line no-unused-vars
import React from "react";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import SideBar from "../SideBar/SideBar";

import Img1 from '../../assets/coffee/espresso2.png'
import Img2 from '../../assets/coffee/D-espresso.png'
import Img3 from '../../assets/coffee/americano (2).png'
import Img4 from '../../assets/coffee/flat-white.png'
import Img5 from '../../assets/coffee/cafe-latte.png'
import Img6 from '../../assets/coffee/macchiato.png'
import Img7 from '../../assets/coffee/capaccino.png'
import Img8 from '../../assets/coffee/frappuccino.png'
import Img9 from '../../assets/coffee/Affogato.png'
import Img10 from '../../assets/coffee/ice-macchiato.png'
import Img11 from '../../assets/coffee/ice-cappucccino.png'
import Img12 from '../../assets/coffee/ice-frappuccino.png'
import Logo from "../../assets/website/coffee_logo.png";
import BgImage from '../../assets/bgStyle.png';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Menu = () => {
  return (
    <>
    <SideBar/>
    <div style={bgStyle} className="overflow-x-hidden">
    <div className="min-h-screen bg-white/50 backdrop-blur-sm ">
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center">
          <div data-aos="fade-down" data-aos-once="true">
            <a href='/home'
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive">
              <img src={Logo} alt="Logo" className="w-14" />
              Cafe Circle
            </a>
          </div>
      </header>

      {/* Hot Drinks Section */}
        <section className="mt-8">
          <h2 className="text-4xl font-bold font-cursive text-gray-800 py-10">Hot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-8 gap-14 place-items-center py-10">
          {[
              { name: "Espresso", price: "2.00", desc: "A strong, bold shot of coffee with a rich crema on top. Perfect for a quick energy boost.", img: Img1, },
              { name: "Double Espresso", price: "2.50", desc: "Twice the intensity of a regular espresso for coffee lovers who crave bold flavor.", img: Img2, },
              { name: "Americano", price: "3.00", desc: "Espresso diluted with hot water for a smooth and mild coffee experience.", img: Img3, },
              { name: "Flat White", price: "3.50", desc: "Velvety microfoam milk poured over a rich espresso shot, offering a creamy texture.", img: Img4, },
              { name: "Cafe Latte", price: "4.00", desc: "A classic mix of espresso and steamed milk, topped with a light layer of foam.", img: Img5, },
              { name: "Macchiato", price: "3.50", desc: "Espresso marked with a dollop of frothy milk for a balanced, bold taste.", img: Img6,  },
              { name: "Cappuccino", price: "4.50", desc: "Equal parts espresso, steamed milk, and frothy foam, topped with a sprinkle of cocoa.", img: Img7,},
              { name: "Frappuccino", price: "4.50", desc: "A sweet and frothy blended coffee drink, often topped with whipped cream.", img: Img8, },
          ].map((item, index) => (
            <div data-aos='fade-up'
              data-aos-delay={item.aosDelay}
              key={index}
              className="rounded-2xl bg-white 
                    hover:bg-primary hover:text-white 
                    shadow-xl duration-200 max-w-[300px] 
                    group relative  gap-6 p-6 text-center">
              <div className='h-[132px] gap-x-12 '>
                {item.img && <img src={item.img} alt={item.name} className='max-w-[200px] block mx-auto 
                                    transform -translate-y-14 group-hover:scale-110 
                                    group-hover:rotate-6 duration-300 ' />}
              </div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className='text-gray-500 group-hover:text-white 
                            duration-300 text-sm line-clamp-2'>{item.desc}</p>
              <p className="text-sm font-extrabold">${item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cold Drinks Section */}
      <section className="mt-8">
          <h2 className="text-4xl font-bold font-cursive text-gray-800 py-10">Cold</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-8 gap-14 place-items-center py-10">
          {[
              { name: "Affogato", price: "6.00", desc: "A scoop of creamy ice cream drowned in a shot of hot espresso for a delightful treat.", img: Img9, },
              { name: "Macchiato", price: "4.50", desc: "Iced espresso layered with milk for a refreshing and bold coffee flavor.", img: Img11, },
              { name: "Cappuccino", price: "5.00", desc: "A chilled version of the classic cappuccino, with smooth foam and rich espresso.", img: Img10, },
              { name: "Frappuccino", price: "5.50", desc: "A cold, blended coffee treat with ice, milk, and flavored syrups, topped with cream.", img: Img12, },
          ].map((item, index) => (
            <div 
              data-aos='fade-up'
              data-aos-delay={item.aosDelay}
              key={index}
              className="rounded-2xl bg-white 
                    hover:bg-primary hover:text-white 
                    shadow-xl duration-200 max-w-[300px] 
                    group relative  gap-6 p-6 text-center">
              <div className='h-[132px] gap-x-12 '>
                {item.img && <img src={item.img} alt={item.name} className='max-w-[200px] block mx-auto 
                                    transform -translate-y-14 group-hover:scale-110 
                                    group-hover:rotate-6 duration-300'/>}
              </div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className='text-gray-500 group-hover:text-white 
                            duration-300 text-sm line-clamp-2'>{item.desc}</p>
              <p className="text-sm font-extrabold">${item.price}</p>
            </div>
          ))}
        </div>
      </section>

            {/* Bean Section */}
            <section className="mt-8">
              <h2 className="text-4xl font-bold font-cursive text-gray-800 py-10">
              Bean
              </h2>
              <ul className="space-y-2">
                {[
                  { name: "Arabica Beans", price: "15.50" },
                  { name: "Robusta Beans", price: "14.50" },
                  { name: "Liberica Beans", price: "10.50" },
                  { name: "Excelsa Beans", price: "20.50" },
                  
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-black/50 border-b pb-2"
                  >
                    <span className="font-bold">{item.name}</span>
                    <span className="font-bold">${item.price}</span>
                  </li>
                ))}
              </ul>
            </section>

      {/* Food Section */}
      <section className="mt-8">
          <h2 className="text-4xl font-bold font-cursive text-gray-800 py-10">Food</h2>
        <ul className="space-y-2">
          {[
            { name: "Chicken Sandwich", price: "13.00" },
            { name: "Special Burger", price: "14.50" },
            { name: "Beef Burger", price: "10.50" },
            { name: "Beef Sandwich", price: "8.50" },
            { name: "Chicken Sandwich", price: "6.50" },
            { name: "Tuna Sandwich", price: "7.00" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-black/50 border-b pb-2"
            >
              <span className="font-bold">{item.name}</span>
              <span className="font-bold">${item.price}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Desserts Section */}
      <section className="mt-8">
          <h2 className="text-4xl font-bold font-cursive text-gray-800 py-10">Dessert</h2>
        <ul className="space-y-2">
          {[
            { name: "Chocolate Waffle", price: "4.50" },
            { name: "Strawberry Waffle", price: "3.50" },
            { name: "Chocolate Cake", price: "5.50" },
            { name: "Ice Cream", price: "4.00" },
            { name: "Chocolate Pudding", price: "3.50" },
            { name: "Strawberry Pudding", price: "2.50" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-black/50 border-b pb-2"
            >
              <span className="font-bold">{item.name}</span>
              <span className="font-bold">${item.price}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>
            Join us on the <span className="font-extrabold text-black">CafeCircle</span> app and unlock exclusive promotions and special offers!
        </p>
      </footer>
    </div>
   <ScrollToTopButton/>
   </div>
   </div>
    </>
  );
};

export default Menu;

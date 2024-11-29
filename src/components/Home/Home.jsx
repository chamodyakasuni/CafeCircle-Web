/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../../assets/Coffee2.png';



const Home = () => {
  
  return (
          <div className='min-h-[px] sm:min-h-[750px] 
          bg-brandDark flex justify-center items-center text-white'>
        <div className="container pb-8 sm:pb-0">
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section */}
            <div className='order-2 sm:order-1 flex flex-col justify-center gap-6'>
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.2 }}
                className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white/80'>
                We serve the richest{" "}
                <span className='text-primary font-cursive'>Coffee</span> &
                <span className='text-primary font-cursive'> Bean</span> in the city
              </motion.h1>
            <div data-aos="fade-up"
              data-aos-delay="400">      
                  <button 
                  
                  className='bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full hover px-4 py-2 text-white hover:scale-150 duration-200'>
                  Coffee And Bean</button>
              </div>
            
          </div>
          {/* Image section */}
          <div 
            data-aos="zoom-in"
          className='min-h-[450px] flex justify-center
          items-center order-1 sm:order-2 relative'>
          <img src={HeroImg} 
          alt=""
            className='w-[300px] sm:w-[450px] 
            sm:w-scale-110 mx-auto spin'
          />
          <div
          data-aos="fade-left" 
          className='bg-gradient-to-r from-primary 
           to-secondary absolute top-10 left-10 p-3 rounded-xl '>
          <h1>Best Bean</h1>
          </div>
          <div 
          data-aos="fade-right"
          className='bg-gradient-to-r from-primary 
           to-secondary absolute bottom-10 right-10 p-3 rounded-xl '>
          <h1>Best Coffee</h1>
          </div>
          </div>
          </div>
        </div>
      </div>
    
   
  )
}

export default Home;
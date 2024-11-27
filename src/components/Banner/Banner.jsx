// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImg from '../../assets/coffee-white.png'
import BgTexture from '../../assets/website/coffee-texture.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: '#270c03',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
};

const Banner = () => {
  return (
    <>
    <span id='about'></span>
    <div style={bgImage}>
              <div className='container min-h-[550px] 
              flex justify-center items-center py-12 sm:py-0'>
        <div className='grid grid-cols-1 
        sm:grid-cols-2 gap-6'>
        {/* Image Section */}
        <div data-aos="zoom-in">
            <img 
            src={BannerImg} 
            alt=''
            className='max-w-[450px] w-full mx-auto spin 
            drop-shadow-xl'
            />
        </div>
        {/* Text content Section */}
        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 
            data-aos="fade-up"
            className='text-3xl sm:text-4xl font-bold font-cursive'>
            Premium Blen Coffee</h1>
            <p 
            data-aos="fade-up"
            className='text-sm text-gray-500 tracking-wide leading-5'>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-5'>
                <div 
                data-aos="fade-up"
                data-aos-delay='300'
                className='flex items-center gap-3'>
                    <GrSecure
                        className='text-2xl h-12 w-12 
                        shadow-sm p-3 rounded-full 
                        bg-red-200'/>
                        <span>Premium Coffee</span>
                </div>
                <div 
                data-aos="fade-up"                      
                data-aos-delay='300'
                className='flex items-center gap-3'>
                        <IoFastFood
                        className='text-2xl h-12 w-12 
                        shadow-sm p-3 rounded-full 
                        bg-orange-200'/>
                        <span>Hot Coffee</span>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay='500' 
                data-aos-offset='100'        
                className='flex items-center gap-3'>
                        <GiFoodTruck className='text-4xl h-12 w-12 
                        shadow-sm p-3 rounded-full bg-yellow-200'/>
                        <span>Cold Coffee</span>
                </div>
            </div>
            <div 
            data-aos="slide-left"
            className='border-l-4 border-primary/50 pl-6 space-y-3' >
                <h1 className='text-2xl font-semibold font-cursive'>Coffee Lover</h1>
                <p className='text-gray-500 text-sm'>
                    {" "}
                                      Discover the perfect cup! From bold espressos to creamy lattes, we celebrate coffee in every form. Savor, explore, and share the joy of your favorite brew. ☕
                </p>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Banner;
// eslint-disable-next-line no-unused-vars
import React from 'react'
import FooterBg from '../../assets/website/coffee-footer.jpg'
import PropTypes from 'prop-types';
import { FaFacebook, FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa6';


const FooterLinks = [
  {
    link:"#Home",
    title: 'Home',
  },
    {
      link: "#Services",
        title: 'Services',
    },
    {
      link: "#About",
        title: 'About',
    },
    {
      link: "#Contact",
        title: 'Contact',
    },
  {
    link: "#Menu",
    title: 'Menu',
  },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minheight: '400%',
    width: '100%',
}

const Footer = ({HandlePopup}) => {
  return (
    <div style={bgImage} className='text-white'>
        <div className='bg-black/40 min-h-[400px]'>
            <div className='container grid md:grid-cols-3 pb-20 pt-5'>
                {/* company details */}
                <div className='py-8 px-4'>
                    <a href='#' 
                    className='font-semibold tracking-widest text-2xl
                    sm:text-3xl font-cursive'>
                    {" "}
                    Cafe Circle
                    </a>
                    <p className='pt-4'>
                      {" "}
                      Cafe coffee, Cozy Vibes, Unforgettable 
                      memories - Your perfect coffee spot.
                    </p>
                    
                    <button
                     
                    onClick={HandlePopup}
                    className=' bg-[#3d2517] 
                    py-2 px-4 mt-5 text-sm rounded-full  hover:scale-105 duration-200 flex items-center gap-2'>
                      <FaUser />
                       Staff Login
                    </button>
                </div>
                  {/* footer links */}
                  <div className='col-span-2 grid grid-cols-2
                  sm:grid-cols-3 md:pl-10'>
                  {/* first col links */}
                    <div className='py-8 px-4'>
                    <h1 className='text-xl font-semibold sm:text-left mb-3'>
                    Footer Links
                    </h1>
                    <ul className='space-y-3'>
                      {
                        FooterLinks.map((data, index) => (
                          <li key={index} >
                            <a href={data.link}
                            className='inline-block hover:scale-105 duration-200'
                            >{data.title}</a>
                          </li>
                        ))
                      }
                    </ul>
                    </div>
                    {/* second col links */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-semibold sm:text-left mb-3'>
                Quick Links
              </h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => (
                    <li key={index} >
                      <a href={data.link}
                        className='inline-block hover:scale-105 duration-200'
                      >{data.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* social media links */}
            <div className='py-16 px-4 col-span-2 sm:col-auto'>
            <h1 className='text-xl font-semibold 
            sm:text-left mb-3'>
            Social Links</h1>
           
            <div className='space-x-3 mt-6'>
              <a href='#'>
                <FaFacebook className='text-3xl inline-block hover:scale-150 duration-200' />
              </a>
                <a href='#'>
                  <FaLinkedin className='text-3xl inline-block hover:scale-150 duration-200' />
                </a>
                <a href='#'>
                  <FaInstagram className='text-3xl inline-block hover:scale-150 duration-200' />
                </a>
            </div>
            </div>
                  </div>
            </div>
        </div>
    </div>
  )
}
Footer.propTypes = {
  HandlePopup: PropTypes.func.isRequired,
};

export default Footer;

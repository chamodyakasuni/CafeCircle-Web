// eslint-disable-next-line no-unused-vars
import React from 'react'
import FooterBg from '../../assets/website/coffee-footer.jpg'

const FooterLinks = [
  {
    id: 1,
    title: 'Home',
  },
    {
        id: 2,
        title: 'Services',
    },
    {
        id: 3,
        title: 'About',
    },
    {
        id: 4,
        title: 'Contact',
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

const Footer = () => {
  return (
    <div style={bgImage} className='text-white'>
        <div className='bg-black/40 min-h-[400px]'>
            <div className='container grid md:grid-cols-3 pb-20 pt-5'>
                {/* company details */}
                <div>
                    <a href='#' className=''></a>
                </div>
                  {/* footer links */}
                  <div></div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
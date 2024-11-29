// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ showPopup, setShowPopup }) => {
  console.log("Popup rendered with showPopup:", showPopup);
  return (
    <>
      {showPopup && (
        <div>
          <div className='h-screen w-screen fixed top-0 left-0 bg-white/20 z-50 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]'>
              {/* header section */}
              <div className='flex items-center justify-between'>
                <div>
                  <h1 className='text-2xl font-bold text-darkGray font-cursive'>
                    Login
                  </h1>
                </div>
                <div>
                  <IoCloseOutline
                    className='text-2xl text-darkGray cursor-pointer'
                    onClick={() => setShowPopup(false)}
                  />
                </div>
              </div>
              {/* Login form section */}
              <div className='mt-4'>
                <input
                  type="email"
                  placeholder='Enter Email'
                  className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4'
                />
                <input
                  type="password"
                  placeholder='Enter Password'
                  className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4'
                />
                {/* Login Button Section */}
                <div>
                  <button
                    className='w-full bg-primary text-white rounded-md p-2'
                    onClick={() => setShowPopup(false)}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
Popup.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  setShowPopup: PropTypes.func.isRequired,
};


export default Popup;

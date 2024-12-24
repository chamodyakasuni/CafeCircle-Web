// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Popup = ({ showPopup, setShowPopup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const closePopup = () => {
    // Clear the input fields
    setEmail('');
    setPassword('');
    // Close the popup
    setShowPopup(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const LoginBtnClick = async () => {
    try {
      if (!email || !password) {
        Swal.fire({
          icon: 'warning',
          title: 'Missing Info',
          text: 'Enter email & password.',
          width: '250px',
          customClass: {
            title: 'text-sm',
            popup: 'text-sm',
          },
          confirmButtonColor: '#8b4513',
        });
        return;
      }

      const queryParams = new URLSearchParams({ email, password }).toString();
      const response = await fetch(`http://localhost/cafecircle/api.php?${queryParams}`, { method: 'GET' });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text();
      const data = JSON.parse(text);

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Logged in successfully.',
          width: '250px',
          customClass: {
            title: 'text-sm',
            popup: 'text-sm',
          },
          confirmButtonColor: '#8b4513',
        });
        navigate('/adminpanel');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: data.message || 'Invalid credentials.',
          width: '250px',
          customClass: {
            title: 'text-sm',
            popup: 'text-sm',
          },
          confirmButtonColor: '#d33',
        });
      }
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please try again later.',
        width: '250px',
        customClass: {
          title: 'text-sm',
          popup: 'text-sm',
        },
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <>
      {showPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-white/20 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
              {/* Header section */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-darkGray font-cursive">Login</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl text-darkGray cursor-pointer"
                    onClick={closePopup} // Close the popup and clear inputs
                  />
                </div>
              </div>
              {/* Login form section */}
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-2 py-1 text-gray-500"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </button>
                </div>
                {/* Login Button Section */}
                <div>
                  <button
                    className="w-full bg-primary text-white rounded-md p-2"
                    onClick={LoginBtnClick}
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

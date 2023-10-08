import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CustomButton from './CustomButton';
import NavHoverBox from './NavHoverBox';
import navdata from '../constants/navdata.json';

const Navbar = () => {
  // State to track the currently hovered menu item
  const [navHover, setNavHover] = useState('');

  // Function to handle menu item hover
  const handleMenuItemHover = (itemName) => {
    setNavHover(itemName);
  };

  // Function to handle menu item hover out
  const handleMenuItemHoverOut = () => {
    setNavHover('');
  };

  // Find the category based on the currently hovered item
  const category = navdata.categories.find((category) => category.name === navHover);

  return (
    <div>
      <div className='sticky top-0 md:px-[50px] text-white z-30 bg-[hsla(240,59%,7%,.35)] h-[100px]  backdrop-blur-[5px] flex items-center justify-between px-[15px]'>
        <div className='logo w-[170px]'>
          <div className='text-[35px] text-end -space-y-[10px]'>
            <span className='font-bold'>Prime</span>Fort.
            <div className='text-end'>
              <p className='text-[7px] font-semibold '>Securing Innovation</p>
            </div>
          </div>
        </div>
        <div className='font-semibold sm:flex gap-[35px] hidden '>
          <div
            onMouseEnter={() => handleMenuItemHover('Services')}
            onMouseLeave={handleMenuItemHoverOut}
            className='cursor-pointer'
          >
            <span>Services</span>
          </div>
          <div className='cursor-pointer'>
            <span>Managed Security Services</span>
          </div>
          <div
            onMouseEnter={() => handleMenuItemHover('Initiatives')}
            onMouseLeave={handleMenuItemHoverOut}
            className='cursor-pointer'
          >
            <span>Initiatives</span>
          </div>
          <div
            onMouseEnter={() => handleMenuItemHover('About Us')}
            onMouseLeave={handleMenuItemHoverOut}
            className='cursor-pointer'
          >
            <span>About Us</span>
          </div>
          <div className='cursor-pointer'>
            <span>Blog</span>
          </div>
        </div>
        <div className='sm:hidden block'>
          <FontAwesomeIcon icon={faBars} size='2xl' color='#B2B2DE' />
        </div>
        <div className='hidden sm:block'>
          <CustomButton name="Contact Us" />
        </div>
      </div>
      {category ? <NavHoverBox category={category} /> : ''}
    </div>
  );
};

export default Navbar;

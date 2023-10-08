import React from 'react';
import CustomButton from './CustomButton';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='md:px-[110px] bg-[#07071B] md:font-semibold'>
      <div className='px-[20px] pt-[80px] md:pt-[140px] relative z-30 md:flex md:justify-between'>
        <div className='space-y-10 pb-[100px] '>
          <div className='logo w-[170px]'>
            <div className='text-[35px] text-end -space-y-[10px]'>
              <span className='font-bold'>Prime</span>Fort.
              <div className='text-end'>
                <p className='text-[7px] font-semibold '>Securing Innovation</p>
              </div>
            </div>
          </div>
          <p className='text-xs md:w-[320px]'>
            Primefort is a global provider of IT security solutions that solve real business issues. Our dedicated team of security engineers offers solutions to customers throughout the world for securing innovations.
          </p>
        </div>
        <div className='hidden sm:flex justify-between text-xs w-1/2 pl-[40px] '>
          <div>
            <h1 className='font-black text-sm text-[#3846C5] mb-6'>Services</h1>
            <ul className='space-y-3'>
              <li>Web Application Penetration Testing</li>
              <li>Mobile Application Penetration Testing</li>
              <li>Network Penetration Testing</li>
              <li>Cloud Security</li>
              <li>Compliance</li>
              <li>SOC</li>
            </ul>
          </div>
          <div>
            <h1 className='font-black text-sm text-[#3846C5] mb-6'>About Us</h1>
            <ul className='space-y-3'>
              <li>Our Story</li>
              <li>Our Journey</li>
              <li>Leadership Team</li>
              <li>Advisors</li>
              <li>Careers</li>
              <li>Awards</li>
            </ul>
          </div>
          <div>

          </div>
        </div>
        <div className='space-y-8  md:w-2/7'>
          <CustomButton name="Contact Us"/>
          <div className='space-x-10 '> 
            <FontAwesomeIcon icon={faFacebookF} size='2xl' color='#E3E9FF'/>
            <FontAwesomeIcon icon={faTwitter} size='2xl' color='#E3E9FF'/>
            <FontAwesomeIcon icon={faInstagram} size='2xl' color='#E3E9FF'/>
          </div>
          <div className='text-xs'>
            <h1 className='text-[#3846C5] font-bold'>Headquarters</h1>
            <p className='md:w-[350px]'>Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai, Chennai - 600002</p>
          </div>
          <div className='text-xs'>
            <h1 className='text-[#3846C5] font-bold'>Email</h1>
            <p>info@primefort.net</p>
          </div>
        </div>
      </div>
      <div className='relative z-30 w-full text-xs text-center py-8 space-y-2'>
        <p>Privacy Policy | Terms and Conditions</p>
        <p>© Copyright - Primefort Private Limited</p>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <div className='sticky top-0 md:px-[50px] text-white z-30 bg-[hsla(240,59%,7%,.35)] h-[100px]  backdrop-blur-[5px] flex items-center justify-between px-[15px]'>
 
        <div className='logo w-[170px]'>
            <div className='text-[35px] text-end -space-y-[10px]'>
               <span className='font-bold'>Prime</span>Fort.
               <div className='text-end'>
              <p className='text-[7px] font-semibold '>Securing Inovation</p>
            </div>
            </div>
        </div>
        <div className='font-semibold sm:flex gap-[35px] hidden '>
          <div>
            <span>Services</span>
          </div>
          <div>
            <span>Managed Secuirity Services</span>
          </div>
          <div>
            <span>Initiatives</span>
          </div>
          <div>
            <span>About Us</span>
          </div>
          <div>
            <span>Blog</span>
          </div>
        </div>
        <div className='sm:hidden block'>
          <FontAwesomeIcon icon={faBars} size='2xl' color='#B2B2DE'/>
        </div>
        <div className='hidden sm:block'>
            <CustomButton name="Contact Us" />
        </div>
    </div>
  )
}

export default Navbar
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FormBox from './FormBox'

const MessageBox = () => {
  return (
    <div className='pt-[25px] pb-[60px] relative z-10 mt-[70px] md:p-10 md:mb-[100px]   bg-[hsla(240,59%,7%,.35)] backdrop-blur-[10px] md:flex md:w-[85%] md:mx-auto'>
        <div className=' space-y-[60px] px-[20px] pb-[70px] md:p-[80px]'>
        <div className='space-y-3'>
        <h1 className='text-[22px] md:text-[30px] font-semibold'>Get in Touch</h1>
        <p className='text-[#BDC5FE] md:font-semibold'>Reach out to us. We can make something awesome together</p>
        </div>

        <div className=' text-[#E3E9FF] space-y-5'>
            <div className='flex gap-3 items-center '>
                <FontAwesomeIcon icon={faEnvelope} size='lg' color='#4758E8' />
                <p>info@primefort.net</p>
            </div>
            <div className='flex gap-3 '>
                <FontAwesomeIcon icon={faLocationDot} size='lg' color='#4758E8' />
                <p className='w-3/4 -mt-1'>Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai, Chennai - 600002</p>
            </div>
        </div>
        <div className='space-x-10 md:pt-[260px]'> 
            <FontAwesomeIcon icon={faFacebookF} size='2xl' color='#E3E9FF'/>
            <FontAwesomeIcon icon={faTwitter} size='2xl' color='#E3E9FF'/>
            <FontAwesomeIcon icon={faInstagram} size='2xl' color='#E3E9FF'/>
        </div>
        </div>
        <FormBox/>
    </div>
    
  )
}

export default MessageBox
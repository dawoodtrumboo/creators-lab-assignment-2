import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const NavHoverBox = ({ category }) => {
  return (
    <div className='hidden sm:block w-[80%] bg-[#0E0E30] absolute z-30 left-[150px] border-b-[5px] border-[#3846C5]'>
      <div className='sm:flex flex-wrap px-10 py-[80px] gap-y-10'>
        {category.items.map((item, index) => (
          <div className='card flex w-1/3 gap-5 items-start' key={index}>
            {item.image ? (
              <div className='w-[150px]'>
                <img src={item.image} alt='img' className='w-full h-full -mt-2' />
              </div>
            ) : (
              ''
            )}

            <div className='space-y-2'>
              <div>
                <h1 className='font-bold text-[17px]'>
                  {item.title} 
                  <FontAwesomeIcon icon={faChevronRight} size='xs' className='ml-2 mt-[3px]'/>
                </h1>
              </div>
              <p className='text-sm'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavHoverBox;

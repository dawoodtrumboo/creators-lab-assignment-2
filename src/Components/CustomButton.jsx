import React from 'react';

const CustomButton = ({ name }) => {
  return (
    <button
      type='submit'
      className='border-[1px] border-l-[5px] w-[200px] border-[#3846C5] text-[#3846C5] font-bold py-2'
    >
      {name}
    </button>
  );
};

export default CustomButton;

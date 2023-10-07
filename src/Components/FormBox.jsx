import React, { useState } from 'react';
import CustomButton from './CustomButton';

const FormBox = () => {
  // Initialize state to store form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(formData); // Log the form data to the console

    setFormData(
      {
        fullName: '',
    email: '',
    subject: '',
    message: '',
      }
    )

  };

  // Function to update form data when input fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='md:w-1/2 md:border-[1px] md:border-[#2b3697] p-3 '>
      <form
        className='flex flex-col md:w-full bg-[#E3E9FF] text-[#3846C5] px-[20px] md:px-[50px] pt-[80px] space-y-[60px] pb-[40px]'
        onSubmit={handleSubmit} // Attach submit function to form onSubmit event
      >
        <div className='w-full flex flex-col'>
          <label>Full Name</label>
          <input
            type='text'
            name='fullName'
            value={formData.fullName}
            onChange={handleInputChange} // Attach input change handler
            className='bg-transparent border-b-[1px] border-[#3846C5] focus:bg-transparent'
          />
        </div>
        <div className='w-full flex flex-col'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className='bg-transparent border-b-[1px] border-[#3846C5] focus:bg-transparent'
          />
        </div>
        <div className='w-full flex flex-col'>
          <label>Subject</label>
          <input
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleInputChange}
            className='bg-transparent border-b-[1px] border-[#3846C5] focus:bg-transparent'
          />
        </div>
        <div className='w-full flex flex-col'>
          <label>Message</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleInputChange}
            className='bg-transparent border-b-[1px] border-[#3846C5] h-[140px] focus:bg-transparent'
          ></textarea>
        </div>
        <CustomButton name='Send Message' type='submit' />
      </form>
    </div>
  );
};

export default FormBox;

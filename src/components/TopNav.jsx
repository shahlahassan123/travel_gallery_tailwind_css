import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';

const TopNav = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
    <div className='flex items-center'>
      <BsChatSquareDots size={20} className='text-[var(--primary-dark)] mr-4' />
      <h1  className='text-xl font-gray-700 font-bold'>WEEKAWAY</h1>
    </div>
    <div className='flex'>
      <div className='hidden md:flex items-center px-4'>
        <AiOutlineClockCircle  size={20}  className= 'text-[var(--primary-dark)] mr-2'/>
        <p className='text-xl font-gray-700 font-bold'>5AM - 9PM</p>
      </div>
      <div className='hidden md:flex items-center px-4'>
        <AiFillPhone className= 'text-[var(--primary-dark)] mr-2' />
        <p className='text-xl font-gray-700 font-bold'>1-888-817-1234</p>
      </div>
      <button>Get a Free Quote</button>
  
    </div>
  
   </div>
  )
}

export default TopNav

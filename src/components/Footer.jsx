import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full m-auto border-t-4 py-8'>
        <div className='flex items-center justify-center m-auto'>
            <BsChatSquareDots className='text-[var(--primary-dark)]' size={20}  />
            <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
        </div>   
    </div>
  )
}

export default Footer

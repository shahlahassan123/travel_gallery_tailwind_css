import React, {useState} from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaBars,
  } from 'react-icons/fa';

const NavBar = () => {

    const [showNav, setShowNav] = useState(false)

    const handleNavClick = () => setShowNav(!showNav)



  return (
    <div className='flex items-center justify-between relative z-10 bg-gray-700/80 text-white min-h-[50px] w-full'>
          <ul className='hidden md:flex items-center px-4'>
              <li><a href="/">Home</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#deals">Deals</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>
          <div className='flex items-center gap-[1rem] mx-4'>
            <FaFacebookF />
            <FaTwitter/>
            <FaGooglePlusG />
            <FaInstagram />
          </div>
          <div className='sm:flex mr-4 md:hidden' onClick={handleNavClick}>
            <FaBars size={20} />
          </div>
          <div onClick={handleNavClick} 
          className={showNav? 
          'absolute left-0 top-0  h-screen w-full  flex flex-col gap-4 py-7 px-4 text-gray-300 bg-gray-700  md:hidden ease-in duration-300'
           : 'absolute top-0 h-screen left-[-100%] ease-in duration-500' }>
              <ul className='h-full w-full text-center pt-12'>
                  <li className='text-2xl py-8'><a href="#gallery">Gallery</a></li>
                  <li className='text-2xl py-8'><a href="/">Home</a></li>
                  <li className='text-2xl py-8'><a href="#deals">Deals</a></li>
                  <li className='text-2xl py-8'><a href="#contact">Contact</a></li>
              </ul>
          </div>
       
      
    </div>
  )
}

export default NavBar

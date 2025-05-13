import { assets } from '@/assests/assets'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    {/* Define different breakpoints for different screen sizes */}
        <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>
            <a href="#top">
                <Image src={assets.logo} alt="logo" className='w-28 cursor-pointer mr-14'/>
            </a>
            <ul className='hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10'>
                <li>
                    <a href="#top">Home</a>
                </li>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#projects">My Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                
            </ul>
            <div>
                <a href="#contact" >Contact<Image src={assets.arrow_icon} alt="logo" className='w-3 '/></a>
            </div>
        </nav>
    </>
  )
}

export default Navbar

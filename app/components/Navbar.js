import { assets } from '@/assets/assets'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScrolled, setIsScrolled] = useState(false);

    const sideBar = useRef();

    const openSideBar = () => {
        sideBar.current.style.transform = 'translateX(-16rem)';
    }

    const closeSideBar = () => {
        sideBar.current.style.transform = 'translateX(16rem)';
    }

    // Will be used whenever the navbar gets mounted
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(scrollY >  50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        })
    }, [])

return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="header_bg_color" className='w-full'/>
    </div>
    {/* Define different breakpoints for different screen sizes */}
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
            <a href="#top">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className='w-28 cursor-pointer mr-14'/>
            </a>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'}`}>
                <li>
                    <a className='font-Ovo' href="#top">Home</a>
                </li>
                <li>
                    <a className='font-Ovo' href="#about">About Me</a>
                </li>
                <li>
                    <a className='font-Ovo' href="#projects">My Projects</a>
                </li>
                <li>
                    <a className='font-Ovo' href="#chat">Let's chat</a>
                </li>
                <li>
                    <a className='font-Ovo' href="#contact">Contact Me</a>
                </li>
            </ul>
            <div className='flex items-center gap-4'>
                {/* Dark mode toggle button */}
                <button onClick={() => setIsDarkMode(prev => !prev)}>
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="moon_icon" className='w-6'/>
                </button>
                {/* Contact Button */}
                <a className=' font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4
                dark:border-white/50' href="#contact" >
                    Contact
                <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="logo" className='w-3 '/></a>
                {/* Hamburger menu button */}
                {/* Visible on mobile */}
                <button className='block md:hidden ml-3' onClick={openSideBar}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="hamburger_Menu" className='w-6'/>
                </button>
            </div>

            {/* Mobile menu */}
            <ul ref={sideBar} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
            dark:bg-darkHover dark:text-white'>
                <div className='absolute top-5 right-5'>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close_icon" className='w-5 cursor-pointer' onClick={closeSideBar}/>
                </div>
                <li>
                    <a className='font-Ovo' href="#top" onClick={closeSideBar}>Home</a>
                </li>
                <li>
                    <a className='font-Ovo' href="#about" onClick={closeSideBar}>About Me</a>
                </li>
                <li>
                    <a className='font-Ovo' href="#projects" onClick={closeSideBar}>My Projects</a>
                </li>
                <li>
                    <a className='font-Ovo' href="#chat" onClick={closeSideBar}>Let's chat</a>
                </li>
                <li>
                    <a className='font-Ovo' href="#contact" onClick={closeSideBar}>Contact Me</a>
                </li>
            </ul>
        </nav>
    </>
)
}

export default Navbar

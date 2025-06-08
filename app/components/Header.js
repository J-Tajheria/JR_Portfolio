import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { assets } from '@/assets/assets';

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center h-screen flex flex-col justify-center items-center gap-4'>
      <motion.div 
        initial={{scale:0}} 
        whileInView={{scale:1}} 
        transition={{duration: 0.8, type: 'spring', stiffness:100}}
        className="relative w-32 h-32"
      >
        <Image 
          src={assets.portfolio_headshot} 
          alt="profile_pic" 
          fill
          className='rounded-full object-cover'
          priority
        />
      </motion.div>
      <motion.h3 
      initial={{y: -20, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.6, delay: 0.3}}
      className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi, I am Jordan Roberts 
      <Image src={assets.hand_icon} alt="hand_wave" className='w-6'/></motion.h3>
      <motion.h1 
      initial={{y: -30, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.8, delay: 0.5}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        frontend Software Engineer based in London.
      </motion.h1>
      <motion.p 
      initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 0.6, delay: 0.7}}
      className='max-w-2xl mx-auto font-Ovo'>
        I am a software engineer with a passion for creating user-friendly and efficient web applications. I specialize in React, Next.js, and Tailwind CSS, and I am always looking for new and innovative ways to improve my skills.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a 
        initial={{y: 30, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.6, delay: 1}}
        href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
          Contact Me
        <Image src={assets.right_arrow_white} alt="right_arrow" className='w-4'/></motion.a>
        <motion.a 
        initial={{y: 30, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.6, delay: 1}}
        href="/JR_resume.pdf"
        download
        className='px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 dark:text-black dark:bg-white'>
          My CV
        <Image src={assets.download_icon} alt="download_icon" className='w-4'/></motion.a>
      </div>
      <motion.a 
        initial={{y: 30, opacity: 0}} 
        whileInView={{y:0, opacity:1}} 
        transition={{duration: 0.6, delay: 1.2}}
        href="#chat" 
        className='mt-4 text-sm hover:underline flex items-center gap-2 justify-center'
      >
        <span className={isDarkMode ? 'text-white/80' : 'text-gray-600'}>Or chat with our AI assistant</span>
        <Image 
          src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} 
          alt="chat" 
          className='w-4'
        />
      </motion.a>
    </div>
  )
}

export default Header;

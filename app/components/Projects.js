import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Projects = (props) => {
  const { isDarkMode } = props;
  
  return (
    <motion.div 
    initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration:1}}
    id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{y:-20, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, delay:0.3}}
        className= 'text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>
        <motion.h2 
        initial={{y:-20, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, delay:0.3}}
        className= 'text-center text-5xl font-Ovo'> My latest work </motion.h2>
        <motion.p 
        initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration:0.6, delay:0.9}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my portfolio. Here you can find some of my latest work.</motion.p>
        <motion.div 
        initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration:0.5, delay:0.7}}
        className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 max-w-6xl mx-auto dark:text-black'>
            {workData.map((project, index) => (
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                key={index}  
                className='aspect-[4/3] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
                style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-[90%] sm:w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 sm:py-3 px-3 sm:px-5 flex justify-between items-center duration-500 group-hover:bottom-7'>
                        <div className='flex-1 min-w-0'>
                            <h2 className='font-semibold text-sm sm:text-base truncate'>{project.title}</h2>
                            <p className='text-xs sm:text-sm text-gray-700 truncate'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-7 sm:w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ml-2'>
                            <Image src={assets.send_icon} alt='send_icon' className='w-4 sm:w-5' />
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Projects
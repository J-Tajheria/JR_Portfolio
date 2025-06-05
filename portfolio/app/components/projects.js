import { assets, workData } from '@/assests/assets'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className= 'text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
        <h2 className= 'text-center text-5xl font-Ovo'> My latest work </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my portfolio. Here you can find some of my latest work.</p>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 max-w-6xl mx-auto'>
            {workData.map((project, index) => (
                <div 
                key={index}  
                className='aspect-[4/3] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
                style={{backgroundImage: `url(${project.bgImage.src})`}}>
                    <div className='bg-white w-[90%] sm:w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-2 sm:py-3 px-3 sm:px-5 flex justify-between items-center duration-500 group-hover:bottom-7'>
                        <div className='flex-1 min-w-0'>
                            <h2 className='font-semibold text-sm sm:text-base truncate'>{project.title}</h2>
                            <p className='text-xs sm:text-sm text-gray-700 truncate'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-7 sm:w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ml-2'>
                            <Image src={assets.send_icon} alt='send_icon' className='w-4 sm:w-5' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <a href='' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'> 
            Show more 
            <Image src={assets.right_arrow_bold} alt='rightArrow' className='w-4'/>
        </a>
    </div>
  )
}

export default Projects
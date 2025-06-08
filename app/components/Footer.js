import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = ({isDarkMode}) => {
    return (
        <div className="mt-20">
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12">
                <p>© 2025 Jordan Roberts. All rights reserved.</p>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className="w-36 mx-auto mb-2 items-center "/>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href='https://github.com/J-Tajheria'>GitHub</a></li>
                    <li><a target='_blank' href='https://www.linkedin.com/in/jordan-r-68610a17a/'>LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

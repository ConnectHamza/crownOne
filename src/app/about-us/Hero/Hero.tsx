"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import crownOneIMG from '../../../../public/Assets/about/CrownOneAbout.webp'


const BreadCrumb = 'Home > About Us'


const Hero = () => {
    return (
            <div className="w-full flex justify-center items-center py-20 px-5" >
        <div className='md:w-lg md:flex justify-between items-center '>
            <div className='md:w-[50%]'data-aos="fade-right" >
                <p>{BreadCrumb}</p>
                <h1 className='heading1 md:mt-10 mt-5'>Empowering Retailers,
                    Mechanics, and Riders.</h1>
                <p>Streamline operations, unlock rewards, and access innovative tools
                    with Crown One your all-in-one solution for growth.</p>
            </div>
            <div className='flex justify-end' data-aos="fade-left">
                <Image src={crownOneIMG} alt='Crown One Image' className='md:w-[50vh] w-[30vh]'/>
            </div>
            </div>
        </div>
        
    )
}

export default Hero
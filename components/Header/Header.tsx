"use client"
import Logo from '../../public/Assets/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';

library.add(faArrowRight);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [downloadLink, setDownloadLink] = useState('');

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const userAgent = navigator.userAgent;

        if (/android/i.test(userAgent)) {
            setDownloadLink('https://play.google.com/store/apps/details?id=com.csi.crownfamily&hl=en');
        }

        if (/iPad|iPhone|iPod/.test(userAgent)) {
            setDownloadLink('https://apps.apple.com/us/app/crown-one/id6449677909');
        }
    }, []);

    return (
        <div className='w-full flex justify-center items-center py-5 md:px-10 px-5 absolute' style={{zIndex: '9999'}}>
            <div className="md:w-lg justify-between flex items-center">
                <div className='md:w-[20%] w-[40%]' data-aos-desktop="fade-right" data-aos-mobile="fade-in">
                    <Link href='/'> <Image className='w-[70%] md:w-auto' src={Logo} alt="Logo"/> </Link>
                </div>
                <div className="md:w-[20%] md:flex hidden justify-center">
                <Link href="/" className="relative hover:text-orange-400 w-full text-center">
                        Home
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/about-us" className="relative hover:text-orange-400 w-full text-center">
                    About Us
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/contact-us" className="relative hover:text-orange-400  w-full text-center">
                        Contact Us
                        <span className="underline-curve"></span>
                    </Link>
                </div>
                <div className='md:w-[20%] w-[50%]  md:flex ' data-aos-desktop="fade-left">
                    <div className='md:flex hidden'>
                    <Button     
                        key='b-1'                    
                        iconName="arrow-right"
                        iconColor="white"
                        buttonText="Log in With Portal"
                        bgColorStart="#ff7438"
                        bgColorEnd="#fe4f11"
                        hoverBgColorStart="#fe4f11"
                        hoverBgColorEnd="#ff7438"
                        textColor="white"                        
                        order='order-last'
                        link='https://web.crownone.app/'
                    />
                    </div>
                    <div className='md:hidden flex '>
                    <Button     
                        key='b-01'                    
                        iconName="arrow-right"
                        iconColor="white"
                        buttonText="Download Our App"
                        bgColorStart="#ff7438"
                        bgColorEnd="#fe4f11"
                        hoverBgColorStart="#fe4f11"
                        hoverBgColorEnd="#ff7438"
                        textColor="white"                        
                        order='order-last'
                        link={downloadLink}
                    />
                    </div>
                </div>
                <div className="sm:flex md:hidden flex items-center">
                    <button
                        className="text-orange-400 focus:outline-none"
                        onClick={handleMenuToggle}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                <div className="sm:flex md:hidden flex flex-col items-center space-y-4 mt-4 text-white" data-aos-desktop="fade-down" data-aos-mobile="fade-down"
                style={{
                    width: '100%',                    
                    position: 'absolute',
                    top: '60%',
                    left: 0,
                    background: '#ff7438',
                    zIndex: 999,
                    padding: '30px',
                    borderRadius: '30px',                    
                                  
                }}>
                    <Link href="/" className="relative  w-full text-center">
                        Home
                        <span className="underline-curve"></span>
                    </Link>
                   
                    <Link href="/about-us" className="relative group w-full text-center">
                        About Us
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/contact-us" className="relative group w-full text-center">
                        Contact Us
                        <span className="underline-curve"></span>
                    </Link>
                    
                </div>
            )}
            </div>

        </div>
    );
};

export default Header;
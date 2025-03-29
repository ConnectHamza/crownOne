"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import FeatureIMG1 from '../../../../public/Assets/home/CrownOneHero1.webp';
import FeatureIMG2 from '../../../../public/Assets/home/CrownOneHero2.webp';
import FeatureIMG3 from '../../../../public/Assets/home/CrownOneHero3.webp';
import FeatureIMG4 from '../../../../public/Assets/home/CrownOneHero4.webp';
import FeatureIMG5 from '../../../../public/Assets/home/CrownOneHero5.webp';
import FeatureIMG6 from '../../../../public/Assets/home/CrownOneHero6.webp';

const AppFeatures = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: true,
    });
  }, []);

  
  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  };

  
  const calculateParallax = (offset: number) => ({
    transform: `translate(${(mousePos.x * offset) / 200}px, ${(mousePos.y * offset) / 200}px)`,
    transition: 'transform 0.2s ease-out', 
  });

  return (
    <div
      className="md:w-lg md:flex justify-around items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      
      <div className="md:block hidden">
        <div style={calculateParallax(-5)} data-aos="fade-right">
          <Image src={FeatureIMG5} alt="Feature5" />
        </div>
        <div style={calculateParallax(-2)} data-aos="fade-right">
          <Image src={FeatureIMG6} alt="Feature6" />
        </div>
      </div>

      
      <div className="flex justify-center relative">
        <div   data-aos="fade-up">
          <Image className="md:w-auto w-[100%]" src={FeatureIMG1} alt="Feature1" />
        </div>
        <div
          className="absolute md:top-40 top-20 left-auto md:w-auto w-[100%]"
          style={calculateParallax(-2)}
          data-aos="fade-up"
        >
          <Image src={FeatureIMG2} alt="Feature2" />
        </div>
      </div>

      
      <div className="md:block hidden">
        <div  data-aos="fade-left">
          <Image src={FeatureIMG3} alt="Feature3" />
        </div>
        <div style={calculateParallax(-4)} data-aos="fade-left">
          <Image src={FeatureIMG4} alt="Feature4" />
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;

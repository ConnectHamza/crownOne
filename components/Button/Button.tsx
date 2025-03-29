"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

interface ButtonProps {
  iconName: IconName | any;
  iconColor: string;
  textColor: string;
  buttonText: string;
  bgColorStart: string | any; 
  bgColorEnd: string | any;   
  hoverBgColorStart: string | any;
  hoverBgColorEnd: string | any;  
  order: string | any;
  link: string | any; 
}

const Button: React.FC<ButtonProps> = ({
  iconName,
  iconColor,
  textColor,
  buttonText,
  bgColorStart,
  bgColorEnd,
  hoverBgColorStart,
  hoverBgColorEnd,
  order,
  link, 
}) => {
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundImage = `linear-gradient(to bottom, ${hoverBgColorStart}, ${hoverBgColorEnd})`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundImage = `linear-gradient(to bottom, ${bgColorStart}, ${bgColorEnd})`;
  };

  const buttonContent = (
    <button
      type="button"
      className="rounded-10 flex items-center justify-center md:gap-5 gap-1 py-2 px-3 md:px-5 transition-colors duration-300 ease-in-out md:text-[16px] text-[12px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${bgColorStart}, ${bgColorEnd})`,
        color: textColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonText}
      <FontAwesomeIcon icon={['fas', iconName]} className={`w-5 ${order}`} color={iconColor} />
    </button>
  );

  return link ? (
    <Link href={link}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default Button;
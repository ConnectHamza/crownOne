import Image from 'next/image'
import React from 'react'


interface IconBoxProps{
    icon: any;
    heading: string;
    text: string;
}


 const IconBox: React.FC<IconBoxProps> = ({icon, heading, text}) => {
  return (
    <div className='flex flex-col gap-3'>
        <Image src={icon} alt={heading}/>
        <h6 className='heading6'>{heading}</h6>
        <p>{text}</p>
    </div>
  )
}

export default IconBox;
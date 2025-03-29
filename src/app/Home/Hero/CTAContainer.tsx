import React from 'react'
import Button from '../../../../components/Button/Button'
import AppStoreIMG from '../../../../public/Assets/icons/App Store.svg'
import PlayStoreIMG from '../../../../public/Assets/icons/Play Store.svg'
import Image from 'next/image';

const CTAContainer = () => {
  return (
    <div className="md:w-lg flex items-center justify-center md:flex-row flex-col gap-4 py-10 md:px-10  px-5 text-center ">
    <div className='flex flex-col justify-center items-center text-black gap-3'>
      <h2 className="heading2">
        Simplify Your Business, Maximize Your Potential
      </h2>
      <p>Manage payments, shop branding, complaints, and more – all in one app!</p>

      <Button
        iconName="arrow-right"
        iconColor="#ff7438"
        buttonText="Explore More Features"
        bgColorStart="transparent"
        bgColorEnd="transparent"
        hoverBgColorStart="transparent"
        hoverBgColorEnd="transparent"
        textColor="#ff7438"
        order='order-last'
        link='https://apps.apple.com/us/app/crown-one/id6449677909'
      />
      <div className="flex md:gap-10 gap-5 md:mt-5">
        <a href='https://apps.apple.com/us/app/crown-one/id6449677909'><Image className='w-20 md:w-[25vh]' src={AppStoreIMG} alt='crownone AppStore' /></a>
        <a href='https://play.google.com/store/apps/details?id=com.csi.crownfamily&hl=en'><Image className='w-20 md:w-[25vh]' src={PlayStoreIMG} alt='crownone PlayStore' /></a>
      </div>

    </div>



  </div>
  )
}

export default CTAContainer
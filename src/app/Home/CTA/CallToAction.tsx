import Image from 'next/image'
import React from 'react'
import Android from '../../../../public/Assets/icons/Play Store.svg'
import IOS from '../../../../public/Assets/icons/App Store.svg'

const CallToAction = () => {
  return (
    <div className='w-full bg-orange-400 flex justify-center py-10 md:py-20 md:px-10 px-5'>
        <div className="w-lg text-white text-center flex flex-col items-center gap-5">
            <h2 className='heading2' data-aos-desktop="fade-up" data-aos-mobile="fade-in">Unlock the Power of Simplicity with Crown One!</h2>
            <p data-aos-desktop="fade-up" data-aos-mobile="fade-in">Streamline your business operations, boost customer trust, and watch your growth soar.</p>
            <div className='flex gap-5 flex-col md:flex-row ' >
            <a href='https://apps.apple.com/us/app/crown-one/id6449677909'><Image src={IOS} alt='IOS' data-aos-desktop="fade-right" data-aos-mobile="fade-up"/>  </a>
            <a href='https://play.google.com/store/apps/details?id=com.csi.crownfamily&hl=en'><Image src={Android} alt='Android' data-aos-desktop="fade-left" data-aos-mobile="fade-up"/></a>        
            </div>
        </div>
    </div>
  )
}

export default CallToAction
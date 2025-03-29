import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Details = () => {
  return (
    <div className='md:w-[50%] self-center'>
        <h3 className='heading4'>OUR OFFICE</h3>
        <ul className='flex flex-col gap-4'>
            <li className='flex gap-2 mt-4 text-[13px] md:text-[15px]'><FaMapMarkerAlt className='text-orange-600'/>Suite # 120, Office Wing, 1st Floor, Park Towers, Clifton, Karachi, Pakistan.</li>
            <li className='flex gap-2 text-[13px] md:text-[15px]'><FaPhone className='text-orange-600'/>021 111 000 FIT (348)</li>
            <li className='flex gap-2 text-[13px] md:text-[15px]'><FaEnvelope className='text-orange-600'/>info@crowngroup.com.pk</li>
            {/* <li className='flex gap-2 text-[13px] md:text-[15px]'><FaGlobe className='text-blue-200'/>www.crowngroup.com.pk</li> */}
        </ul>
    </div>
  )
}

export default Details
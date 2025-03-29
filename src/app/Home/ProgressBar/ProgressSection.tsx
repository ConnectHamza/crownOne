import React from 'react'
import ProgressBar from '../../../../components/ProgressBar/ProgressBar'

const ProgressSection = () => {
  return (
    <div className='w-full bg-gray-100 justify-center flex md:px-10 px-5 py-10'>
        <div className="w-lg justify-center" data-aos-desktop="fade-up" data-aos-mobile="fade-up">
        <h3 className='text-center text-[20px]'>
        Join the Crown One Revolution
        </h3>
        <div className="flex flex-col md:flex-row mt-10 justify-between gap-8">
            <ProgressBar count='100,000+' description='Crown One Users'/>
            <ProgressBar count='5000+' description='Covered Cities'/>
            <ProgressBar count='300,000+' description='No of Monthly Scan'/>
            <ProgressBar count='12,000+' description='Claims Resolved'/>
           
        </div>
        </div>
    </div>
  )
}

export default ProgressSection
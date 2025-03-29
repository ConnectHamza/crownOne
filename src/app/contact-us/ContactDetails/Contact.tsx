import React from 'react'
import Details from './Details'
import Form from './Form'
import CallToAction from '@/app/Home/CTA/CallToAction'

const Contact = () => {
  return (
    <div className='md:w-full block md:flex md:flex-col items-center justify-center '>
        <div className="md:w-lg md:flex justify-between py-[100px] px-5">
        <Details />
        <Form />        
        </div>
        <CallToAction />
    </div>
  )
}

export default Contact
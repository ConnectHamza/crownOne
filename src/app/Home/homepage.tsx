"use client"
import React from 'react';
import HeroSection from './Hero/Main';
import ProgressSection from './ProgressBar/ProgressSection';
import Benefits from './BenefitsSection/Benefits';
import FeatureSection from '../../../components/FeatureSection/FeatureSection';
import Testimonials from './Testimonials/Testimonials';
import { faqsData } from './data';
import CallToAction from './CTA/CallToAction';
import Faqs from '../../../components/Faqs/Faqs';


const Homepage: React.FC = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>     
      <HeroSection  />
      <ProgressSection/>      
      <Benefits />
      <FeatureSection />     
      <Testimonials />
      <Faqs data={faqsData}/>
      <CallToAction />
    </div>
  );
};

export default Homepage;
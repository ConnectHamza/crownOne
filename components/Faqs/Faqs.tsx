"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqsProps {
  data: FaqItem[];
}

const Faqs: React.FC<FaqsProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full flex justify-center px-5 md:py-40 py-20'>
      <div className="w-md">
        <h2 className='heading2 text-center'>FAQS</h2>
        <div className='mt-5'>
          {data.map((faq, index) => (
            <div key={index} className='mb-5 border-b'>
              <div
                className='flex justify-between items-center font-bold md:text-[20px] text-[15px] cursor-pointer md:py-3 py-2'
                onClick={() => toggleAccordion(index)}
              >
                <span className='md:text-[18px] text-[16px] hover:md:text-[20px] smooth-transition' data-aos-desktop="fade-right">{faq.question}</span>
                <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronRight} />
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className='md:text-[16px] text-[13px] mt-2 border-b-2 border-orange-400 py-2' data-aos-desktop="fade-in">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
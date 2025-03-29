import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay
import { testimonialsData } from './data';
import QuoteIcon from '../../../../public/Assets/icons/Quote-Icon.svg';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  return (
    <div className='w-full flex justify-center bg-gray-100 md:mt-40 mt-20 md:py-40 py-20 px-5'>
      <div className="w-full">
        <h2 className='heading2 text-center mb-6' data-aos-desktop="fade-up" data-aos-mobile="fade-up">Testimonials</h2>
        <Swiper data-aos-desktop="fade-in" data-aos-mobile="fade-in"
          modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
          spaceBetween={50}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Configure autoplay
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center bg-white md:p-10 p-5 rounded-10 shadow-sm">
                <Image src={QuoteIcon} alt='Quote Icon' className="w-24 h-24 rounded-full mb-4" />
                <p className="mb-2">{testimonial.testimonial}</p>
                {/* <p className="text-sm text-gray-500">- {testimonial.name}</p> */}
                <div className="flex mt-5 items-center md:gap-5 gap-3">
                  {/* <Image src={testimonial.image} alt={testimonial.name} width={70} height={100} /> */}
                  <p className='font-bold text-left'>{testimonial.designation} <span className='font-[400]'>- {testimonial.name}</span></p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
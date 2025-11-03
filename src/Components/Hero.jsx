import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Card from './Card';

const Hero = ({movies}) => {
    return (
        <div className='bg-gray-600 h-full text-white py-5'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="custom-swiper mx-auto w-[90%]"
            >
              <div className=''>
                 {
                movies.map((movie,index)=>(
                    <SwiperSlide>
                        <Card key={index} movie={movie}></Card>
                    </SwiperSlide>
                    
                ))
               }
              </div>
            </Swiper>
        </div>
    );
};

export default Hero;
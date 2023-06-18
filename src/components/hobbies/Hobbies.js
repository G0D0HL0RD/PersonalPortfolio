import React from 'react'
import "./hobbies.css"
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Hobbies = () => {
  return (
    <section className='hobbies container section'>
        <h2 className='section__title'>Hobbies</h2>
        <span className='section__subtitle'>My Other Side</span>

        <Swiper className='hobbies__container'
        loop={true}
        grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 48,
              },
            }}
            modules={[Pagination]}
        >
            {Data.map(({id,image,title,description})=>{
                return (
                    <SwiperSlide className='hobbies__card' key={id}>
                        <img src={image} alt="" className='hobbies__img' />

                        <h3 className='hobbies__name'>{title}</h3>
                        <p className='hobbies__description'>{description}</p>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </section>
  )
}

export default Hobbies;

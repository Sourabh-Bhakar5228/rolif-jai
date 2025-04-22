import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const FurnitureSlider = ({
  sliderImages = []
}) => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {sliderImages.map((img, index) => (
          <SwiperSlide key={index} className='my-5'>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-64 object-cover rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg shadow-gray-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FurnitureSlider;

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FurnitureSlider = ({
  sliderImages = []
}) => {
  return (
    <div className="w-full  mx-auto">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        speed={3000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl  "
      >
        {sliderImages.map((img, index) => (
          <SwiperSlide key={index} className='my-5'>
            <img
              src={img}
             alt={img}
              className="w-full h-64 object-cover rounded-xl  transition-transform duration-300 hover:scale-105  shadow-lg shadow-gray-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FurnitureSlider
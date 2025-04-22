import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Arrows (using Tailwind Button-based versions)
import PrevArrow from "../../components/arrows/PrevArrow";
import NextArrow from "../../components/arrows/NextArrow";

import testimonials from "../../configs/testimonials";
import TestimonialCard from "../../components/cards/TestimonialCard";

const ClientTestimonials = () => {
    const swiperRef = useRef(null);

    return (
        <div className="testimonial_bg-section w-full py-3 bg-transparent text-center">
            <h2 className="text-[32px] uppercase font-semibold">Client Testimonials</h2>

            {/* Swiper Slider with Arrows */}
            <div className="relative w-full px-4">
                {/* Custom Prev Arrow */}
                <PrevArrow onClick={() => swiperRef.current.swiper.slidePrev()} />

                <Swiper
                    ref={swiperRef}
                    modules={[ Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 1200, disableOnInteraction: false }}
                    speed={1200}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        600: { slidesPerView: 1 },
                        900: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Next Arrow */}
                <NextArrow onClick={() => swiperRef.current.swiper.slideNext()} />
            </div>
        </div>
    );
};

export default ClientTestimonials;

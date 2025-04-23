import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Banners = () => {
  const images = [
    <img
      // src="/banners/banner1.png"
      src="/home-banner/1.png"
      alt="Banner 1"
      className="w-full h-auto object-cover"
    />,
    <img
      // src="/banners/banner2.png"
      src="/home-banner/2.png"
      alt="Banner 2"
      className="w-full h-auto object-cover"
    />,
    <img
      // src="/banners/banner3.png"
      src="/home-banner/3.png"
      alt="Banner 3"
      className="w-full h-auto object-cover"
    />,
  ];

  return (
    <section className="w-full overflow-x-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        loop
        className="w-full"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx} className="!w-full">
            {image}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banners;

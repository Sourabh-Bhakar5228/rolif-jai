// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.css";

// const Banners = () => {
//   // const images = [
//   //     "https://cms.landmarkshops.in/cdn-cgi/image/w=1440,q=85,fit=cover/Home-Centre/Test-UI/HC-Uber-HP-Desktop-HeroBanner6-09Apr2025.jpg",
//   //     "https://cms.landmarkshops.in/cdn-cgi/image/w=1440,q=85,fit=cover//Home-Centre/Test-UI/HC-Uber-HP-Desktop-HeroBanner2-31Mar2025.jpg",
//   // ];

//   const images = [
//     <>
//       {/* <div className="grid grid-cols-2 w-full">
//                 <img src={'/images/banners/furniture-banner.jpg'} alt={`banner image`} className="w-full h-auto object-cover" />
//                 <img src={'/images/banners/furniture-banner.jpg'} alt={`banner image`} className="w-full h-auto object-cover" />
//                 <img src={'/images/banners/furniture-banner.jpg'} alt={`banner image`} className="w-full h-auto object-cover" />
//                 <img src={'/images/banners/furniture-banner.jpg'} alt={`banner image`} className="w-full h-auto object-cover" />
//             </div> */}
//       <img src="/banners/banner1.png" alt="image" />
//     </>,
//     <img src="/banners/banner2.png" alt="image" />,
//     <img src="/banners/banner3.png" alt="image" />,
//   ];

//   return (
//     <section className="w-full pb-5">
//       <Swiper
//         modules={[Autoplay, Navigation]}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         // pagination={{ clickable: true }}
//         navigation
//         loop
//         className="w-full select-none"
//       >
//         {images.map((src, idx) => (
//           <SwiperSlide key={idx}>
//             {/* <img src={'/images/banner-image-1.png'} alt={`banner image`} className="w-full h-auto object-cover" /> */}
//             {src}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Banners;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Banners = () => {
  const images = [
    <img
      src="/banners/banner1.png"
      alt="Banner 1"
      className="w-full h-auto object-cover"
    />,
    <img
      src="/banners/banner2.png"
      alt="Banner 2"
      className="w-full h-auto object-cover"
    />,
    <img
      src="/banners/banner3.png"
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

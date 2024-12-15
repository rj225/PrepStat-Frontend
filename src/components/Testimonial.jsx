import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import testimonials from "../data/testimonials";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        What Our Users Say
      </h2>

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        loopAdditionalSlides={1}
        pagination={{ clickable: true, dynamicMainBullets: 1, dynamicBullets: true}}
        coverflowEffect={{
          rotate: -10,
          stretch: 0, 
          depth: 130,
          modifier: 3, 
          slideShadows: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween:0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center pt-20 pb-10 bg-gradient-to-bl from-orange-300 from-20% via-orange-100 via-70% to-orange-300 to-90% rounded-xl md:p-20 md:max-h-full overflow-auto items-center"
          >
            <div className="relative bg-orange-100 md:bg-orange-200 md:bg-opacity-20 py-5 px-2 md:p-8 rounded-lg m-auto shadow-2xl text-center w-72 md:min-w-full">
              {/* Image Overlap */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-28 h-28 md:w-36 md:h-36 rounded-3xl border border-yellow-700 shadow-lg md:shadow-orange-50 shadow-orange-300 object-fill"
                />
              </div>

              {/* Card Content */}
              <div className="md:mt-16 mt-8">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">"{item.feedback}"</p>
                <div className="md:text-sm text-xs flex justify-center items-center gap-x-2 font-semibold">
                  <h4 className="md:text-base text-sm text-orange-600 font-bold">
                    Placement Offers: 
                  </h4>
                  <div key={index} className="text-gray-800 italic"> {item.offers}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;

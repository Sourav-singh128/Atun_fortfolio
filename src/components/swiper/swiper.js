import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import Cards from "../card";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const SwiperComp = ({ achivements }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        // modules={[Navigation]}
        className="mySwiper"
      >
        {achivements.map((value) => (
          <SwiperSlide>
            <Cards url={value.url} desc={value.desc} width="50%" height="450" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComp;

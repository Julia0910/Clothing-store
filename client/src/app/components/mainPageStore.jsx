import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { mainBackground } from "../api/face.api/background";

const MainPageStore = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        centeredSlides={true}
        className="mainSwiper "
      >
        {mainBackground.map((back) => (
          <SwiperSlide className="slide">
            <img src={back.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainPageStore;

import img1 from "../../public/image/web-development-programmer.svg"
import img2 from "../../public/image/Layer1_1_1.svg"
import img3 from "../../public/image/vectorAtmemly(3)1.svg"
import img4 from "../../public/image/201.svg"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HeaderSwiper.css";

import { Autoplay } from "swiper/modules";

export default function HeaderSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay]}
        className="ml-auto HeaderS "
        loop={true}
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

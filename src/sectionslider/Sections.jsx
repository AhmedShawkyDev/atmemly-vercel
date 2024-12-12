// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Sections.css";

// import required modules
// import { Pagination } from "swiper/modules";
import img1 from "../../public/image/slider.1.png";
import img2 from "../../public/image/slider.3.png";
import img3 from "../../public/image/slider.2.png";
import img4 from "../../public/image/slider.4.png";
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper slider sliddder-wrapppper "
        loop={true}
      >
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center bg-zinc-700  rounded   overflow-hidden ">
            <img
              src={img1}
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Programming</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center  bg-zinc-700  rounded overflow-hidden">
            <img
              src={img3}
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Graphic Design</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center  bg-zinc-700 rounded overflow-hidden ">
            <img
              src={img2}
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Blogging</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center  bg-zinc-700 rounded overflow-hidden ">
            <img
              src={img3}
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Programming</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center  bg-zinc-700 rounded overflow-hidden">
            <img
              src={img4}
              className="rounded  hover:scale-125 card-img-3"
              alt=""
            />
            <h1 className="text-white m-4 font-pops">Marketing</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

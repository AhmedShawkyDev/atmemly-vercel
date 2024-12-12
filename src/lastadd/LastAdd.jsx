// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./LastAdd.css";
import { Navigation } from "swiper/modules";
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
        modules={[Navigation]}
        navigation={true}
        className="mySwiper lastAddImg last-add"
      >
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center   rounded  border border-stone-200  mb-16 ">
            <img src={img1} className="lastview" alt="" />
            <h5 className="text-sky-300 m-4 font-pops">Medo Seiam</h5>
            <div className="place-items-start">
              <h1 className="text-black  font-pops  px-5">
                my new service xd to html,css and javascript
              </h1>
              <h4 className="text-sky-300 m-4 font-pops">Start from 20 USD</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center   rounded  border border-stone-200   ">
            <img src={img2} className="lastview" alt="" />
            <h5 className="text-sky-300 m-4 font-pops">Medo Seiam</h5>
            <div className="place-items-start">
              <h1 className="text-black  font-pops px-5">
                my new service xd to html,css and javascript
              </h1>
              <h4 className="text-sky-300 m-4 font-pops">Start from 20 USD</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center   rounded  border border-stone-200   ">
            <img src={img3} className="lastview" alt="" />
            <h5 className="text-sky-300 m-4 font-pops">Medo Seiam</h5>
            <div className="place-items-start">
              <h1 className="text-black  font-pops px-5">
                my new service xd to html,css and javascript
              </h1>
              <h4 className="text-sky-300 m-4 font-pops">Start from 20 USD</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center   rounded  border border-stone-200   ">
            <img src={img4} className="lastview" alt="" />
            <h5 className="text-sky-300 m-4 font-pops">Medo Seiam</h5>
            <div className="place-items-start">
              <h1 className="text-black  font-pops px-5">
                my new service xd to html,css and javascript
              </h1>
              <h4 className="text-sky-300 m-4 font-pops">Start from 20 USD</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center   rounded  border border-stone-200   ">
            <img src={img1} className="lastview" alt="" />
            <h5 className="text-sky-300 m-4 font-pops">Medo Seiam</h5>
            <div className="place-items-start">
              <h1 className="text-black  font-pops px-5">
                my new service xd to html,css and javascript
              </h1>
              <h4 className="text-sky-300 m-4 font-pops">Start from 20 USD</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col justify-center items-center   rounded  border border-stone-200   ">
            <img src={img2} className="lastview" alt="" />
            <h5 className="text-sky-300 m-4 font-pops">Medo Seiam</h5>
            <div className="place-items-start">
              <h1 className="text-black  font-pops px-5">
                my new service xd to html,css and javascript
              </h1>
              <h4 className="text-sky-300 m-4 font-pops">Start from 20 USD</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

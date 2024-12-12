// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./LastAdd.css";
import { Navigation } from "swiper/modules";
// import required modules
// import { Pagination } from "swiper/modules";

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
            <img src=".." className="lastview" alt="" />
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
            <img src=".." className="lastview" alt="" />
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
            <img src=".." className="lastview" alt="" />
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
            <img src=".." className="lastview" alt="" />
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
            <img src=".." className="lastview" alt="" />
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
            <img src=".." className="lastview" alt="" />
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

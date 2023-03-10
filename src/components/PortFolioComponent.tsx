import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import "./../style.css";
import NewsCard from './NewsCard';

function PortFolioComponent() {
    return (
        <Swiper grabCursor={true}  slidesPerView={3} pagination={{clickable:true}} navigation={true} modules={[Pagination, Navigation, Autoplay]}  breakpoints={{
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }} className="mySwiper">
            <SwiperSlide><NewsCard/></SwiperSlide>
            <SwiperSlide><NewsCard/></SwiperSlide>
            <SwiperSlide><NewsCard/></SwiperSlide>
            <SwiperSlide><NewsCard/></SwiperSlide>
            <SwiperSlide><NewsCard/></SwiperSlide>
            <SwiperSlide><NewsCard/></SwiperSlide>
            <SwiperSlide><NewsCard/></SwiperSlide>
        </Swiper>
    );
}

export default PortFolioComponent;
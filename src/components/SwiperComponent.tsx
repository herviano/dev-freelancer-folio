import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {EffectCoverflow, Pagination, Navigation } from "swiper";
import "./../style.css";
import PortFoloiCard from './PortFoloiCard';
import { Typography } from '@mui/material';

function SwiperComponent() {
    return (
        <Swiper grabCursor={true} slidesPerView={3} pagination={{clickable:true}} navigation={true} modules={[Pagination, Navigation]} breakpoints={{
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
            <SwiperSlide><PortFoloiCard/></SwiperSlide>
            <SwiperSlide><PortFoloiCard/></SwiperSlide>
            <SwiperSlide><PortFoloiCard/></SwiperSlide>
            <SwiperSlide><PortFoloiCard/></SwiperSlide>
            <SwiperSlide><PortFoloiCard/></SwiperSlide>
            <SwiperSlide><PortFoloiCard/></SwiperSlide>
            <SwiperSlide><PortFoloiCard/></SwiperSlide>
            <Typography> hiiiiiiiiiiiiiiiiiiiiiiii</Typography>
        </Swiper>
    );
}

export default SwiperComponent;
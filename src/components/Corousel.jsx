import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay,Navigation } from 'swiper';
import './css/Swiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import m1 from './marvel1.jpg'
import m2 from './marvel2.jpg'
import m3 from './marvel3.jpg'
import m4 from './marvel4.jpg'




const Corousel = () => {
  return (
    <div className='swiper'>
      <Swiper navigation={true} modules={[Autoplay, Navigation]} 
      centeredSlides={true} autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }} className="mySwiper">
      <SwiperSlide><img src={m3}></img></SwiperSlide>
      <SwiperSlide><img src={m1}></img></SwiperSlide>
      <SwiperSlide><img src={m2}></img></SwiperSlide>
      <SwiperSlide><img src={m4}></img></SwiperSlide>
      


      </Swiper>
    </div>
  )
}

export default Corousel

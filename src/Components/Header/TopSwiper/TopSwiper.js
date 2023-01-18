import React from 'react'
import './TopSwiper.css'


//all ads photos
import ads3 from '../../../images/ads3.jpg'
import ads4 from '../../../images/ads4.jpg'
import ads5 from '../../../images/ads5.jpg'
import ads6 from '../../../images/ads6.jpg'
import ads7 from '../../../images/ads7.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";



const TopSwiper = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,

            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >


            <SwiperSlide>

                <img src={ads3} alt='ads2' className='' />

            </SwiperSlide>

            <SwiperSlide>

                <img src={ads4} alt='ads2' className='' />

            </SwiperSlide>

            <SwiperSlide>

                <img src={ads5} alt='ads2' className='' />

            </SwiperSlide>

            <SwiperSlide>

                <img src={ads6} alt='ads2' className='' />

            </SwiperSlide>

            <SwiperSlide>

                <img src={ads7} alt='ads2' className='' />

            </SwiperSlide>


        </Swiper>
    )
}

export default TopSwiper
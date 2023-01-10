import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


//images ads
import ads1 from '../../../images/bottonSwiper/ads1.jpg'
import ads2 from '../../../images/bottonSwiper/ads2.jpg'
import ads3 from '../../../images/bottonSwiper/ads3.jpg'
import ads4 from '../../../images/bottonSwiper/ads4.jpg'
import ads5 from '../../../images/bottonSwiper/ads5.jpg'
import ads6 from '../../../images/bottonSwiper/ads6.jpg'
import ads7 from '../../../images/bottonSwiper/ads7.jpg'
import ads8 from '../../../images/bottonSwiper/ads8.jpg'
import ads9 from '../../../images/bottonSwiper/ads9.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './BottonSwiper.css'

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';


const BottonSwiper = () => {
    return (
        <div className="botton_swiper">


            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide-buttom">
                    <Link to="/allproducts">
                        <img src={ads1} alt="slide1" className='' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-buttom">
                    <Link to="/allproducts">
                        <img src={ads2} alt="slide2" className='' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-buttom">
                    <Link to="/allproducts">
                        <img src={ads3} alt="slide3" className='' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-buttom">
                    <Link to="/allproducts">
                        <img src={ads4} alt="slide4" className='' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-buttom">
                    <Link to="/allproducts">
                        <img src={ads5} alt="slide5" className='' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-buttom">
                    <Link to="/allproducts">
                        <img src={ads6} alt="slide6" className='' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-buttom">
                    <Link to="/allproducts">
                        <img src={ads7} alt="slide7" className='' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-buttom">
                    <Link to="/allproducts">
                        <img src={ads8} alt="slide8" className='' />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-buttom">
                    <Link to="/allproducts">
                        <img src={ads9} alt="slide9" className='' />
                    </Link>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default BottonSwiper
import React from "react";
import './Header.css'

//all ads photos
import ads3 from '../../images/ads3.jpg'
import ads4 from '../../images/ads4.jpg'
import ads5 from '../../images/ads5.jpg'
import ads6 from '../../images/ads6.jpg'
import ads7 from '../../images/ads7.jpg'
import cartHeader1 from '../../images/cartHeader1.jpg'
import cartHeader2 from '../../images/cartHeader2.jpg'
import cartHeader3 from '../../images/cartHeader3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BottonSwiper from "./BottonSwiper/BottonSwiper";

const Header = () => {

    return (
        <header className='Header px-2'>
            <div className='parent_swiper'>

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

            </div>

            <div className="parent_products container">
                <div className="row">
                    <div className="col-md-4 mt-2">
                        <Card>
                            <Link to="/allproducts">
                                <Card.Img variant="top" src={cartHeader1} />
                            </Link>
                            <Card.Body>
                                <Card.Title>Kitchen appliances</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <div className="container text-center">
                                    <div className="">
                                        <p className="rate_product">
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                        </p>
                                        <strong className="price_product">480 EGP</strong>
                                    </div>
                                    <Link to="/allproducts" className="btn btn-outline-warning">  ابدأ رحلة التسوق <i className="fa-solid fa-basket-shopping"></i></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-2">
                        <Card>
                            <Link to="/allproducts">
                                <Card.Img variant="top" src={cartHeader2} />
                            </Link>
                            <Card.Body>
                                <Card.Title>Headphones | Below </Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <div className="container text-center">
                                    <div className="">
                                        <p className="rate_product">
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                        </p>
                                        <strong className="price_product">650 EGP</strong>
                                    </div>
                                    <Link to="/allproducts" className="btn btn-outline-warning">  ابدأ رحلة التسوق <i className="fa-solid fa-basket-shopping"></i></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-2">
                        <Card>
                            <Link to="/allproducts">
                                <Card.Img variant="top" src={cartHeader3} />
                            </Link>
                            <Card.Body>
                                <Card.Title>Watches | Up to 40%</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <div className="container text-center">
                                    <div className="">
                                        <p className="rate_product">
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                            <i className="fa-solid fa-star text-warning"></i>
                                        </p>
                                        <strong className="price_product">330 EGP</strong>
                                    </div>
                                    <Link to="/allproducts" className="btn btn-outline-warning">  ابدأ رحلة التسوق <i className="fa-solid fa-basket-shopping"></i></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="bottom-swiber-edit">
                    <BottonSwiper />
                </div>
            </div>

        </header>
    )
}

export default Header
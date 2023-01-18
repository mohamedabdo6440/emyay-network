import React from "react";
import './Header.css'


import cartHeader1 from '../../images/cartHeader1.jpg'
import cartHeader2 from '../../images/cartHeader2.jpg'
import cartHeader3 from '../../images/cartHeader3.jpg'



// import required modules
import BottonSwiper from "./BottonSwiper/BottonSwiper";
import ReusableCard from "./ReusableCard";
import TopSwiper from "./TopSwiper/TopSwiper";

const Header = () => {

    return (
        <header className='Header px-2'>
            <div className='parent_swiper'>
                <TopSwiper />
            </div>

            <div className="parent_products container">
                <div className="row">
                    {/*cards in header*/}
                    <ReusableCard image={cartHeader1} title={"Kitchen appliances"} price={"480"} />
                    <ReusableCard image={cartHeader2} title={"Headphones | Below"} price={"650"} />
                    <ReusableCard image={cartHeader3} title={"Watches | Up to 40%"} price={"330"} />
                </div>
            </div>

            <div className="container my-5">
                <div className="bottom-swiber-edit">
                    <BottonSwiper />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {/*cards in header*/}
                    <ReusableCard image={cartHeader1} title={"Kitchen appliances"} price={"480"} />
                    <ReusableCard image={cartHeader2} title={"Headphones | Below"} price={"650"} />
                    <ReusableCard image={cartHeader3} title={"Watches | Up to 40%"} price={"330"} />
                </div>
            </div>

        </header>
    )
}

export default Header
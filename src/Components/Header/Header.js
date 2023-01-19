import React from "react";
import './Header.css'


import cartHeader1 from '../../images/cartHeader1.jpg'
import cartHeader2 from '../../images/cartHeader2.jpg'
import cartHeader3 from '../../images/cartHeader3.jpg'

import cartHeader4 from '../../images/tshert5.jpg'
import cartHeader5 from '../../images/tshert7.jpg'
import cartHeader6 from '../../images/tshert8.jpg'

import cartHeader7 from '../../images/cam1.jpg'
import cartHeader8 from '../../images/cam2.avif'
import cartHeader9 from '../../images/cam3.jpg'



// import required modules
import BottonSwiper from "./BottonSwiper/BottonSwiper";
import ReusableCard from "./ReusableCard";
import TopSwiper from "./TopSwiper/TopSwiper";
import Footer from "../../Pages/Layout/Footer/Footer";

const Header = () => {

    return (
        <header className='Header'>
            <div className='parent_swiper'>
                <TopSwiper />
            </div>

            <div className="parent_products container">
                <div className="row">
                    {/*cards in header*/}
                    <ReusableCard image={cartHeader1} title={"Kitchen appliances"} oldprice={"670"} newprice={"480"} />
                    <ReusableCard image={cartHeader2} title={"Headphones | Below"} oldprice={"980"} newprice={"650"} />
                    <ReusableCard image={cartHeader3} title={"Watches | Up to 40%"} oldprice={"510"} newprice={"330"} />
                </div>
            </div>

            <div className="container my-5">
                <div className="bottom-swiber-edit">
                    <BottonSwiper />
                </div>
            </div>

            <div className="container ">
                <div className="row">
                    {/*cards in header*/}
                    <ReusableCard image={cartHeader4} title={"Offers on all brands| Up to 40%"} oldprice={"770"} newprice={"530"} />
                    <ReusableCard image={cartHeader5} title={"The latest | international | fashion"} oldprice={"280"} newprice={"150"} />
                    <ReusableCard image={cartHeader6} title={"T-Shert Prands"} oldprice={"560"} newprice={"330"} />
                </div>
            </div>

            <div className="container ">
                <div className="row">
                    {/*cards in header*/}
                    <ReusableCard image={cartHeader7} title={"Protection Systems| Up to 40%"} oldprice={"1070"} newprice={"830"} />
                    <ReusableCard image={cartHeader8} title={"All types | And | Features"} oldprice={"680"} newprice={"450"} />
                    <ReusableCard image={cartHeader9} title={"Smart surveillance camera"} oldprice={"560"} newprice={"410"} />
                </div>
            </div>

            <Footer />

        </header>
    )
}

export default Header
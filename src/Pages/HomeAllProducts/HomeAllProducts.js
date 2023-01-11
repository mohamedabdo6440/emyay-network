import React from 'react'
import './HomeAllProducts.css'

//ads image
import adsproducts from '../../images/ProductsAds/adsproducts.jpg'
import AllProducts from './Allproducts/AllProducts'


const HomeAllProducts = () => {
    return (
        <>

            <div className='categores_links d-flex p-1 justify-content-between'>
                <h6 className='me-3'>سرعة التوصيل <i className="fa-solid fa-location-crosshairs"></i></h6>
                <h4 className='ms-4'><i className="fa-solid fa-truck-fast"></i> </h4>
            </div>
            <div className='container'>
                <div className='my-4'>
                    <img src={adsproducts} alt="adsProducts" className='w-100 h-50 ' />
                </div>


                <AllProducts />
            </div>
        </>
    )
}

export default HomeAllProducts
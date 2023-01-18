import React, { useEffect } from 'react'
import './HomeAllProducts.css'

//ads image
import adsproducts from '../../images/ProductsAds/adsproducts.jpg'
import AllProducts from './Allproducts/AllProducts'

//handle data from redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../Redux/store/ProductsSlice'
import Footer from '../Layout/Footer/Footer'

const HomeAllProducts = () => {

    //handle data from redux
    const { isLoading, Allproducts } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

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

                <AllProducts isLoading={isLoading} Allproducts={Allproducts} />

            </div>

            <Footer />
        </>
    )
}

export default HomeAllProducts
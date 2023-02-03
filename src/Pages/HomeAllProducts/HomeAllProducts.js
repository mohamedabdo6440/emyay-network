import React, { useState } from 'react'
import './HomeAllProducts.css'

//ads image
import adsproducts from '../../images/ProductsAds/adsproducts.jpg'
import AllProducts from './Allproducts/AllProducts'

//handle data from redux
import { insertCart } from '../../Redux/store/CartSlice';
import { useDispatch } from 'react-redux'

import Footer from '../Layout/Footer/Footer'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase';



const HomeAllProducts = ({ Allproducts, isLoading }) => {

    const dispatch = useDispatch()
    //handle userAccount Name
    const [currentUser, setCurrentUser] = useState("")
    onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser ? currentUser.email : currentUser);
    })



    //handle add cart function
    const handleAddToCart = (idProduct) => {
        const FilterCartDataUse = Allproducts.filter((dataUse) => {
            return dataUse.id === idProduct;
        })
        const data = {

            id: null,
            newprice: "",
            oldprice: "",
            productTitle: "",
            productDescription: "",
            userAuth: "",
            productImage: "",
        }
        FilterCartDataUse.map((datacart) => {
            return (
                data.id = datacart.id,
                data.newprice = datacart.newprice,
                data.oldprice = datacart.oldprice,
                data.productTitle = datacart.productTitle,
                data.productDescription = datacart.productDescription,
                data.productImage = datacart.productImage,
                data.userAuth = currentUser
            )
        })

        dispatch(insertCart(data));
    }




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



                <AllProducts isLoading={isLoading} Allproducts={Allproducts} handleAddToCart={handleAddToCart} />

            </div>

            <Footer />
        </>
    )
}

export default HomeAllProducts
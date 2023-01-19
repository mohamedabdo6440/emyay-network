import React, { useEffect, useState } from 'react'
import './Cart.css'

//handle data from redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarts } from '../../../Redux/store/CartSlice'
import CardCart from './CardCart'
import ServerIssu from '../../../Pages/LoadPage/ServerIssu'
import LoadPage from '../../../Pages/LoadPage/LoadPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../Firebase/Firebase'

import adscart from '../../../images/adsCarts/adscart.jpg'
import adscart2 from '../../../images/adsCarts/adscart2.jpg'

const Cart = () => {

    const [currentUser, setCurrentUser] = useState("")
    //handle userAccount Name
    onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser ? currentUser.email : currentUser);
    })



    //handle data from redux
    const { isLoading, AllCarts } = useSelector((state) => state.carts);
    const dispatch = useDispatch();

    //handle function for 
    const FilterCarts = AllCarts.filter((cart) => {
        return cart.userAuth === currentUser;
    })


    useEffect(() => {
        dispatch(getAllCarts())
    }, [dispatch])


    const { error } = useSelector(state => state.carts)


    return (
        <div>
            <div className="container">
                <div className='ads_cart d-flex'>
                    <img src={adscart} alt='ads' className='w-50' />
                    <img src={adscart2} alt='ads2' className='w-50' />
                </div>

                <hr />

                <div className='parent_cart'>
                    {
                        error ? (<ServerIssu message={"حدث مشكله في الخادم برجاء اعادة المحاوله"} />) : (
                            <>
                                {

                                    isLoading ? (<LoadPage />) : (
                                        FilterCarts.length > 0 ? (
                                            FilterCarts.map((product) => {
                                                return (
                                                    <CardCart
                                                        id={product.id}
                                                        categoryName={product.categoryName}
                                                        name={product.productTitle}
                                                        oldprice={product.oldprice}
                                                        newprice={product.newprice}
                                                        description={product.productDescription}
                                                        rate={product.rate}
                                                        image={product.productImage}
                                                    />
                                                )
                                            })
                                        ) : ("لا يوجد منتجات...")
                                    )
                                }

                            </>
                        )
                    }

                </div>

            </div>
        </div>
    )
}

export default Cart
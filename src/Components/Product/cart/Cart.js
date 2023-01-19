import React, { useEffect } from 'react'
import './Cart.css'

//handle data from redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarts } from '../../../Redux/store/CartSlice'
import CardCart from './CardCart'
import ServerIssu from '../../../Pages/LoadPage/ServerIssu'
import LoadPage from '../../../Pages/LoadPage/LoadPage'

const Cart = () => {

    //handle data from redux
    const { isLoading, AllCarts } = useSelector((state) => state.carts);
    const dispatch = useDispatch();

    // const AllCartsAdd = localStorage.getItem("Allcarts")
    // console.log(JSON.parse(AllCartsAdd));
    useEffect(() => {
        dispatch(getAllCarts())
    }, [dispatch])


    console.log(AllCarts);


    const { error } = useSelector(state => state.carts)


    return (
        <div>
            <div className="container">
                <div className='ads_cart'>
                    ads
                </div>

                <div className='parent_cart'>
                    {
                        error ? (<ServerIssu message={"حدث مشكله في الخادم برجاء اعادة المحاوله"} />) : (
                            <>
                                {

                                    isLoading ? (<LoadPage />) : (
                                        AllCarts.length > 0 ? (
                                            AllCarts.map((product) => {
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
import React, { useEffect } from 'react'
import './Cart.css'

//handle data from redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllCarts, deleteCarts } from '../../../Redux/store/CartSlice'
import CardCart from './CardCart'

import ServerIssu from '../../../Pages/LoadPage/ServerIssu'
import LoadPage from '../../../Pages/LoadPage/LoadPage'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../../../Firebase/Firebase'

import adscart from '../../../images/adsCarts/adscart.jpg'
import adscart2 from '../../../images/adsCarts/adscart2.jpg'


const Cart = () => {


    // //handle userAccount Name
    // const [currentUser, setCurrentUser] = useState("")
    // onAuthStateChanged(auth, (currentUser) => {
    //     setCurrentUser(currentUser ? currentUser.email : currentUser);
    // })


    //handle data from redux
    const { isLoading, AllCarts } = useSelector((state) => state.carts);
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.carts)


    // const CartProductsNo = localStorage.setItem("CartProductsNo" , JSON.stringFy(AllCarts.length))


    // //handle function for 
    // const FilterCarts = AllCarts.filter((cart) => {
    //     return cart.userAuth === currentUser;
    // })



    useEffect(() => {
        dispatch(getAllCarts())
    }, [dispatch])



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
                                                        deleteCarts={deleteCarts}
                                                        dispatch={dispatch}



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
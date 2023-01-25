import React, { useState } from 'react'
import ProductInfo from './ProductInfo'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../Redux/store/ProductsSlice';
import { useEffect } from 'react';
import ServerIssu from '../../../Pages/LoadPage/ServerIssu';
import LoadPage from '../../../Pages/LoadPage/LoadPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase';
import { insertCart } from '../../../Redux/store/CartSlice';



const ProducDetails = () => {

    //handle data from redux
    const { error, isLoading, Allproducts } = useSelector((state) => state.products);
    const { AllCarts } = useSelector((state) => state.carts);
    const dispatch = useDispatch();


    const Params = useParams();
    const ProductID = parseInt(Params.prodId);

    console.log(ProductID);

    //handle userAccount Name
    const [currentUser, setCurrentUser] = useState("")
    onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser ? currentUser.email : currentUser);
    })


    //filter products Details
    const FiterProductInfo = Allproducts.filter((pro) => {
        return pro.id === ProductID;
    })

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])




    return (
        <div>
            {
                error ? (<ServerIssu message={"حدث مشكله في الخادم برجاء اعادة المحاوله"} />) : (
                    <>
                        {

                            isLoading ? (<LoadPage />) : (
                                FiterProductInfo.length > 0 ? (
                                    FiterProductInfo.map((product) => {
                                        return (
                                            < ProductInfo
                                                id={product.id}
                                                productTitle={product.productTitle}
                                                oldprice={product.oldprice}
                                                newprice={product.newprice}
                                                productDescription={product.productDescription}
                                                userAuth={currentUser}
                                                productImage={product.productImage}
                                                dispatch={dispatch}
                                                insertCart={insertCart}
                                                FiterProductInfo={FiterProductInfo}

                                                AllCarts={AllCarts}
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
    )
}

export default ProducDetails
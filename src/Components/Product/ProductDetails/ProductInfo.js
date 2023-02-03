import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BottonSwiper from '../../Header/BottonSwiper/BottonSwiper'
import Rate from '../Rate/Rate'
import { deleteCarts } from '../../../Redux/store/CartSlice'


const ProductInfo = ({ id, productTitle, oldprice, newprice, productDescription, productImage, userAuth, insertCart, dispatch, AllCarts }) => {


    //check product if exists in cart or not
    const checkID = AllCarts.map((cart) => {
        return cart.id === id;
    })



    //handle product if exists in cart or not 
    const handleAddToCart = () => {
        dispatch(insertCart({
            id,
            productTitle,
            oldprice,
            newprice,
            productDescription,
            userAuth, productImage
        }))
    }


    return (
        <div className="container">
            <Card className='shadow-card text-center my-3 mx-2' key={id}>

                <div className='d-flex'>
                    <Card.Body>
                        <Card.Title>{productTitle}</Card.Title>
                        <Card.Text>
                            {productDescription}
                        </Card.Text>
                        <div className="container text-center">
                            <div className="">
                                <div className="rate_product text-center">
                                    <Rate />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <del className='mx-2 my-2 text-danger'><span className="badge text-bg-light text-danger">EGP</span>{oldprice}</del>
                                    <strong className="price_product my-2"><span className="badge text-bg-light">EGP</span>{newprice}</strong>
                                </div>
                            </div>
                            <button onClick={() => { handleAddToCart() }} className="btn btn-outline-secondary">أضف الي العربة <i className="fa-solid fa-cart-plus"></i></button>
                        </div>

                    </Card.Body>
                    <Link to="/Allproducts">

                        <Card.Img variant="top" src={productImage} className="productImage_product" />

                    </Link>


                </div>
                <div className='m-auto w-75'>
                    <BottonSwiper />
                </div>
            </Card>
        </div>
    )
}

export default ProductInfo
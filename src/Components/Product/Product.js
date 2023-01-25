import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rate from './Rate/Rate';


const Product = ({ id, categoryName, name, oldprice, newprice, description, image, handleAddToCart, dispatch, productDetails }) => {



    //handle rate product

    // const rate = 1;
    // const ratechecked = (rate) => {

    //     switch (rate) {
    //         case 1:
    //             return (
    //                 <i className="fa-solid fa-star text-warning"></i>
    //             )

    //         case 2:
    //             return (
    //                 <>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                 </>
    //             )

    //         case 3:
    //             return (
    //                 <>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                 </>
    //             )

    //         case 4:
    //             return (
    //                 <>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                 </>
    //             )

    //         case 5:
    //             return (
    //                 <>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                     <i className="fa-solid fa-star text-warning"></i>
    //                 </>
    //             )



    //         default:
    //             <i className="fa-solid fa-star text-warning"></i>
    //             break;
    //     }
    // }

    return (
        <div className='col-md-4' key={id}>
            <Card className='shadow-card text-center my-3 mx-2'>
                <Link to={`/productDetails/${id}`}>

                    <Card.Img variant="top" src={image} className="image_product" />

                </Link>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className="container text-center">
                        <div className="">
                            <div className="rate_product text-center">
                                {/* {ratechecked(rate)} */}
                                <Rate />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <del className='mx-2 my-2 text-danger'><span className="badge text-bg-light text-danger">EGP</span>{oldprice}</del>
                                <strong className="price_product my-2"><span className="badge text-bg-light">EGP</span>{newprice}</strong>
                            </div>
                        </div>
                        <button className="btn btn-outline-dark" onClick={() => handleAddToCart(id)}>أضف الي العربة <i className="fa-solid fa-cart-plus"></i></button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
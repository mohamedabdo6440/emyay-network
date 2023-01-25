import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rate from '../Rate/Rate'





const CardCart = ({ id, categoryName, name, oldprice, newprice, description, image, deleteCarts, dispatch }) => {


    return (
        <Card className='shadow-card text-center my-3 mx-2' key={id}>

            <div className='d-flex'>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
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
                        <button onClick={() => { dispatch(deleteCarts(id)) }} className="btn btn-outline-danger">ازاله من العربة <i className="fa-solid fa-cart-plus"></i></button>
                    </div>

                </Card.Body>
                <Link to={`/productDetails/${id}`}>

                    <Card.Img variant="top" src={image} className="image_product" />

                </Link>


            </div>
        </Card>
    )
}

export default CardCart
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ReusableCard = ({ image, title, newprice, oldprice }) => {
    return (
        <div className="col-md-4 mb-4">
            <Card>
                <Link to="/allproducts">
                    <Card.Img variant="top" src={image} />
                </Link>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <div className="container text-center">
                        <div className="">
                            <p className="rate_product">
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                                <i className="fa-solid fa-star text-warning"></i>
                            </p>

                            <div className='d-flex justify-content-center'>
                                <del className='mx-2 my-2 text-danger'><span className="badge text-bg-light text-danger">EGP</span>{oldprice}</del>
                                <strong className="price_product my-2"><span className="badge text-bg-light">EGP</span>{newprice}</strong>
                            </div>

                        </div>
                        <Link to="/allproducts" className="btn btn-outline-warning">  ابدأ رحلة التسوق <i className="fa-solid fa-basket-shopping"></i></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ReusableCard
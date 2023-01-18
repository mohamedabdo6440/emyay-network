import React from 'react'
import './Categores.css'
import { Link } from 'react-router-dom'

const Categores = ({ userIN }) => {



    return (
        <div className=''>
            <div className='btn   bg-secondary p-2 mt-2 text-white '>
                {userIN !== null ? <Link to="/account" className='text-white text-decoration-none'>
                    {userIN.replace("@gmail.com", "")} <i className="fa-solid fa-person-walking-luggage"></i>
                </Link> : <a className=' text-white text-decoration-none' href="/login"> <i className="fa-solid fa-user fa-xl ms-2"></i> ليس لديك حساب</a>}
            </div>


            <div className=' my-4'>
                {userIN !== null ? <Link to="/addproduct" className='btn bg-success p-2 mt-2 text-white '>أضف منتجك <i className="fa-solid fa-person-booth"></i>
                </Link> : <a className='btn bg-danger text-decoration-none p-2 mt-2 text-white ' href="/login"> <i className="fa-solid fa-right-to-bracket"></i> يرجي التسجيل أولا</a>} </div>

            <div className='container text-center mt-4 w-75'>
                <hr />
            </div>

            <div className='allCategores mt-5 text-dark'> <i className="fa-solid fa-street-view"></i> كل الاقسام</div>

            <ul className='list_categores mt-3'>
                <Link to="/allproducts/clothes" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>ملابس وموضه <i className="fa-solid fa-shirt"></i></li></Link><hr className='w-50' />
                <Link to="/allproducts/mobile" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>موبايل <i className="fa-solid fa-mobile-screen-button"></i></li></Link><hr className='w-50' />
                <Link to="/allproducts/children" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>أطفال <i className="fa-solid fa-child-reaching"></i></li></Link><hr className='w-50' />
                <Link to="/allproducts/electronics" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>الكترونيات <i className="fa-solid fa-plug"></i></li></Link><hr className='w-50' />
                <Link to="/allproducts/Houseware" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>أدوات منزليه <i className="fa-solid fa-mug-hot"></i></li></Link><hr className='w-50' />
                <Link to="/allproducts/cars" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>سيارات <i className="fa-solid fa-car"></i></li></Link><hr className='w-50' />
                <Link to="/allproducts/real_estates" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>عقارات <i className="fa-solid fa-landmark"></i></li></Link>
            </ul>

            { }
        </div>
    )
}

export default Categores
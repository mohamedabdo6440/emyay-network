import React from 'react'
import './Categores.css'
import { Link } from 'react-router-dom'

const Categores = ({ userIN }) => {
    return (
        <div className=''>
            <div className='account bg-secondary p-2 mt-2 text-white rounded-start'>
                {userIN !== null ? <Link to="/account" className='side_login'>
                    {userIN.replace("@gmail.com", "")} <i className="fa-solid fa-person-walking-luggage"></i>
                </Link> : <a className='side_login' href="/login"> <i className="fa-solid fa-user fa-xl ms-2"></i> ليس لديك حساب</a>} </div>


            <div className='my-4'>
                {userIN !== null ? <Link to="/addproduct" className='side_login bg-success p-2 mt-2 text-white rounded-start'>أضف منتجك <i className="fa-solid fa-person-booth"></i>
                </Link> : <a className='side_login bg-danger p-2 mt-2 text-white rounded-start' href="/login"> <i className="fa-solid fa-right-to-bracket"></i> يرجي التسجيل أولا</a>} </div>

            <div className='container text-center mt-4 w-75'><hr /></div>

            <div className='allCategores mt-5 text-dark'> <i className="fa-solid fa-street-view"></i> كل الاقسام</div>

            <ul className='list_categores mt-3'>
                <Link to="" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>ملابس وموضه <i className="fa-solid fa-shirt"></i></li></Link><hr className='w-50' />
                <Link to="" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>موبايل <i className="fa-solid fa-mobile-screen-button"></i></li></Link><hr className='w-50' />
                <Link to="" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>أطفال <i className="fa-solid fa-child-reaching"></i></li></Link><hr className='w-50' />
                <Link to="" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>الكترونيات <i className="fa-solid fa-plug"></i></li></Link><hr className='w-50' />
                <Link to="" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>أدوات منزليه <i className="fa-solid fa-mug-hot"></i></li></Link><hr className='w-50' />
                <Link to="" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>سيارات <i className="fa-solid fa-car"></i></li></Link><hr className='w-50' />
                <Link to="" className='text-light text-decoration-none'> <li className='btn btn-outline-warning text-center text-dark'>عقارات <i className="fa-solid fa-landmark"></i></li></Link>
            </ul>
        </div>
    )
}

export default Categores
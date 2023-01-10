import React from 'react'
import './Categores.css'
import { Link } from 'react-router-dom'

const Categores = ({ userIN }) => {
    return (
        <div className=''>
            <div className='account bg-secondary p-2 mt-2 text-white rounded-start'><i className="fa-solid fa-user fa-xl ms-2"></i>  {userIN !== null ? <Link to="/account" className='side_login'>{userIN.replace("@gmail.com", "")}</Link> : <a className='side_login' href="/login">سجل الدخول</a>} </div>

            <div className='container text-center mt-4 w-75'><hr /></div>


            <div className='allCategores mt-5 p-2 bg-danger rounded-start text-white'>كل الاقسام</div>

            <ul className='list_categores mt-5'>
                <li>fdfdfd</li>
                <li>fdfdfd</li>
                <li>fdfdfd</li>
                <li>fdfdfd</li>
                <li>fdfdfd</li>
                <li>fdfdfd</li>
            </ul>
        </div>
    )
}

export default Categores
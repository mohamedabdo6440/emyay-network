import React from 'react'
import './LoadPage.css'

const ServerIssu = ({ message }) => {
    return (
        <div className='ServerIssu'>
            <div className='container text-center server_message'>
                <p className=''>{message} 😴</p>
            </div>
        </div>
    )
}

export default ServerIssu
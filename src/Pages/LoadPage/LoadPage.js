import React from 'react'
import './LoadPage.css'
import loading from '../../images/loading.gif'

const LoadPage = () => {
    return (
        <div className='handelPup_up text-center my-4'>
            <div className='Load_image '>
                <img src={loading} alt={"جاري التحميل ..."} className='w-100 ' />
            </div>
        </div>
    )
}

export default LoadPage
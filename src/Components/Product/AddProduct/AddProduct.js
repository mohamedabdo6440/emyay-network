import React from 'react'
import './AddProduct.css'

const AddProduct = () => {
    return (
        <div className="container register-form my-4 ">
            <div className="form">
                <div className="form-content">
                    <div className='my-4'><h3>أضف بيانات المنتج </h3></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group my-2">
                                <input type="text" className="form-control" placeholder="أسم صاحب المنتج..." />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" placeholder="رقم الهاتف المحمول ..." />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-2">
                                <select className='form-control'>
                                    <option value="clothes"> ملابس</option>
                                    <option value="mobile">موبايل</option>
                                    <option value="children">أطفال</option>
                                    <option value="electronics">الكترونيات</option>
                                    <option value="Houseware">أدوات منزليه</option>
                                    <option value="cars">سيارات</option>
                                    <option value="real_estates">عقارات</option>
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" placeholder="عنوان المنتج من كلمتين..." />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-2">
                                <input type="text" className="form-control" placeholder="السعر قبل الخصم..." />
                            </div>
                            <div className="form-group my-2">
                                <input type="text" className="form-control" placeholder="السعر بعد الخصم..." />
                            </div>
                            <div className="form-group my-2">
                                <label className='text-info me-2'>صورة المنتج ...</label>
                                <input type="file" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-2">
                                <textarea className="form-control" placeholder="أوصف حالة المنتج بأقل تعبير..." rows="3" />
                            </div>
                            <div className="form-group my-2">
                                <textarea className="form-control" placeholder="العنوان بالتفصيل /المحافظه/المدينه/الشارع/العقار..." rows="3" />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btnSubmit  my-2">Submit</button>
                </div>
            </div>
        </div>

    )
}

export default AddProduct
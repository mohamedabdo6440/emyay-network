import React, { useRef, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import './AddProduct.css';

//validation form with formik yup
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { db, storage } from '../../../Firebase/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';



const SignupSchema = Yup.object().shape({
    salesman: Yup.string().min(2, 'نص أقصر من الازم').max(50, 'نص أطول من الازم').required('تاكد من ادخال الاسم'),
    phone: Yup.number().required('تاكد من ادخال رقم الهاتف'),
    oldprice: Yup.number().required('تاكد من ادخال السعر القديم'),
    newprice: Yup.number().required('تاكد من ادخال السعر الجديد'),
    productTitle: Yup.string().min(2, 'أسم أقصر من الازم').max(20, 'أسم أطول من اللازم').required('تاكد من ادخال اسم المنتج'),
    productDescription: Yup.string().min(15, 'وصف اقصر من الازم').max(150, 'وصف اطول من الازم').required('تاكد من ادخال وصف المنتج'),
    address: Yup.string().min(10, 'نص اقصر من الازم').max(60, 'نص اطول من الازم').required('تاكد من ادخال العنوان'),


});


const AddProduct = () => {


    const NewProduct = collection(db, "addProduct")


    const [image, setImage] = useState(null);
    const [url, setURL] = useState('')
    const [category, setCategory] = useState("clothes")
    const navigate = useNavigate();
    const fileRef = useRef(null)


    //function handle addProduct to database
    const addNewProduct = async (productData) => {
        await addDoc(NewProduct, productData)
    }

    const handleCategorySelected = (e) => {
        setCategory(e.target.value);
    }



    //function upload product image to database
    const uploadImage = async () => {
        const imageRef = ref(storage, `images/${image.name + v4()}`)
        await uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setURL(url)
            }).catch(error => {
                console.log(error.message, alert("error getting url image"));
            })
        })
    }

    //handle upload image
    if (image) {
        uploadImage()
    }

    return (
        <div className="container register-form my-4 ">

            <Formik
                initialValues={{
                    salesman: '',
                    phone: '',
                    oldprice: '',
                    newprice: '',
                    productTitle: '',
                    productDescription: '',
                    address: '',
                    productImage: '',
                    categoryName: '',
                }}

                validationSchema={SignupSchema}
                onSubmit={values => {


                    values.productImage = url;
                    values.categoryName = category;
                    setTimeout(() => {
                        addNewProduct(values)
                        navigate("/allproducts")
                    }, 1500);
                }}

            >
                {({ errors, values, setFieldValue, touched }) => (
                    <Form>
                        <div className="form">
                            <div className="form-content">
                                <div className='my-4'><h3>أضف بيانات المنتج </h3></div>
                                <div className="row">

                                    <div className='col-md-12'>
                                        <div className="form-group my-2">

                                            <input
                                                onChange={(e) => setImage(e.target.files[0])}
                                                ref={fileRef} hidden type="file" name="productImage" className="form-control" />
                                            {errors.productImage && touched.productImage ? (
                                                <div className='text-danger text-center py-1'>{errors.productImage}</div>
                                            ) : null}
                                        </div>

                                        <button type='button' className={`btn ${image ? 'btn-success' : 'btn-warning'} my-4 w-100`}
                                            onClick={() => {
                                                fileRef.current.click()

                                            }}
                                        ><i className="fa-solid fa-image fa-lg me-3 fa-fw"></i>قم بتحميل صورة المنتج أولا لمراجعتها...</button>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group my-2">

                                            <Field name="salesman" className="form-control" placeholder="أسم صاحب المنتج..." />
                                            {errors.salesman && touched.salesman ? (
                                                <div className='text-danger text-center py-1'>{errors.salesman}</div>
                                            ) : null}


                                        </div>



                                        <div className="form-group my-2">
                                            <Field name="phone" className="form-control" placeholder="رقم الهاتف المحمول ..." />
                                            {errors.phone && touched.phone ? (
                                                <div className='text-danger text-center py-1'>{errors.phone}</div>
                                            ) : null}
                                        </div>

                                    </div>



                                    <div className="col-md-6">

                                        <div className="form-group my-2" >
                                            <select
                                                className="form-select form-control mb-3" aria-label=".form-select-lg example"
                                                onChange={handleCategorySelected}
                                            >
                                                <option>اختر فئة المنتج</option>
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
                                            <Field name="productTitle" className="form-control" placeholder="أسم المنتج..." />
                                            {errors.productTitle && touched.productTitle ? (
                                                <div className='text-danger text-center py-1'>{errors.productTitle}</div>
                                            ) : null}
                                        </div>

                                    </div>



                                    <div className="col-md-6">

                                        <div className="form-group my-2">
                                            <Field name="oldprice" className="form-control" placeholder="السعر قبل الخصم..." />
                                            {errors.oldprice && touched.oldprice ? (
                                                <div className='text-danger text-center py-1'>{errors.oldprice}</div>
                                            ) : null}
                                        </div>

                                        <div className="form-group my-2">
                                            <Field name="newprice" className="form-control" placeholder="السعر بعد الخصم..." />
                                            {errors.newprice && touched.newprice ? (
                                                <div className='text-danger text-center py-1'>{errors.newprice}</div>
                                            ) : null}
                                        </div>
                                    </div>



                                    <div className="col-md-6">
                                        <div className="form-group my-2">
                                            <Field name="productDescription" className="form-control py-4" placeholder="أوصف حالة المنتج بأقل تعبير..." rows="3" />
                                            {errors.productDescription && touched.productDescription ? (
                                                <div className='text-danger text-center py-1'>{errors.productDescription}</div>
                                            ) : null}
                                        </div>


                                        <div className="form-group my-2">
                                            <Field name="address" className="form-control py-4" placeholder="العنوان بالتفصيل /المحافظه/المدينه/الشارع/العقار..." rows="3" />
                                            {errors.address && touched.address ? (
                                                <div className='text-danger text-center py-1'>{errors.address}</div>
                                            ) : null}

                                        </div>

                                    </div>

                                    <button type="Submit" className="btn btn-dark w-50 my-2">Add Product</button>

                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default AddProduct

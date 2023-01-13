import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import Product from '../../../Components/Product/Product'
// import Allproducts from '../../../test.json'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../Firebase/Firebase'
const AllProducts = () => {


    const [AllProducts, setAllProducts] = useState([{}])

    const newProductRef = collection(db, "addProduct")
    //get product from database
    useEffect(() => {
        const getData = async () => {
            const dataFire = await getDocs(newProductRef);
            setAllProducts(dataFire.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getData()
    }, [newProductRef]);




    return (
        <div className='row products_list'>

            {
                AllProducts.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            categoryName={product.categoryName}
                            name={product.productTitle}
                            oldprice={product.oldprice}
                            newprice={product.newprice}
                            description={product.productDescription}
                            rate={product.rate}
                            image={product.productImage}
                        />
                    )
                })
            }

        </div>

    )
}

export default AllProducts
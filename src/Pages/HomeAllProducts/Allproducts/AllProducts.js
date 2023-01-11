import React, { useState } from 'react'
import './AllProducts.css'
import Product from '../../../Components/Product/Product'
import Allproducts from '../../../test.json'
const AllProducts = () => {

    //get all products
    const [allproducts, setAllProducts] = useState(Allproducts.products)


    return (
        <div className='row products_list'>

            {
                allproducts.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            categoryName={product.categoryName}
                            name={product.name}
                            oldprice={product.oldprice}
                            newprice={product.newprice}
                            description={product.description}
                            rate={product.rate}
                            image={product.image}
                        />
                    )
                })
            }

        </div>

    )
}

export default AllProducts
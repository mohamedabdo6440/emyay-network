import React from 'react'
import './AllProducts.css'
import Product from '../../../Components/Product/Product'
import LoadPage from '../../LoadPage/LoadPage'
import ServerIssu from '../../LoadPage/ServerIssu'
import { useSelector } from 'react-redux'


const AllProducts = ({ isLoading, Allproducts, handleAddToCart, filter }) => {


    const { error } = useSelector(state => state.products)

    return (
        <div className='row products_list'>

            <>
                {
                    error ? (<ServerIssu message={"حدث مشكله في الخادم برجاء اعادة المحاوله"} />) : (
                        <>
                            {

                                isLoading ? (<LoadPage />) : (
                                    Allproducts.length > 0 ? (
                                        Allproducts.map((product) => {
                                            return (
                                                <Product
                                                    id={product.id}
                                                    categoryName={product.categoryName}
                                                    name={product.productTitle}
                                                    oldprice={product.oldprice}
                                                    newprice={product.newprice}
                                                    description={product.productDescription}
                                                    rate={product.rate}
                                                    image={product.productImage}
                                                    handleAddToCart={handleAddToCart}
                                                />
                                            )
                                        })
                                    ) : ("لا يوجد منتجات...")
                                )
                            }

                        </>
                    )
                }
            </>

        </div>

    )
}

export default AllProducts
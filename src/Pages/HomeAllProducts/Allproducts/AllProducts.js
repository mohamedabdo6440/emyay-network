import React from 'react'
import './AllProducts.css'
import Product from '../../../Components/Product/Product'
import LoadPage from '../../LoadPage/LoadPage'
import ServerIssu from '../../LoadPage/ServerIssu'

import { useSelector } from 'react-redux'
// import Products from '../../../test.json'
// import { getDocs, collection } from 'firebase/firestore'
// import { db } from '../../../Firebase/Firebase'

const AllProducts = ({ isLoading, Allproducts }) => {


    const { error } = useSelector(state => state.products)



    // const [AllProductData, setAllProductData] = useState([{}])
    // const newProductRef = collection(db, "addProduct")
    // //get product from database
    // useEffect(() => {
    //     const getData = async () => {
    //         const dataFire = await getDocs(newProductRef);
    //         setAllProducts(dataFire.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     }
    //     getData()
    // }, [newProductRef]);



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
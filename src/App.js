
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import HomePage from "./Pages/Home/Home"
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import Error from './Pages/Error/ErrorPage'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import HomeAllProducts from "./Pages/HomeAllProducts/HomeAllProducts";
import AddProduct from "./Components/Product/AddProduct/AddProduct";
import Cart from "./Components/Product/cart/Cart";
import ProducDetails from "./Components/Product/ProductDetails/ProducDetails";
import ProductInfo from "./Components/Product/ProductDetails/ProductInfo";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./Redux/store/ProductsSlice";





function App() {

  //handle userAccount Name
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser ? currentUser.email : currentUser);
  })


  //handle data from redux
  const { Allproducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (

    <div className="App">
      <BrowserRouter>
        <Layout >
          <Routes>

            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route path="/allproducts" element={user ? <HomeAllProducts Allproducts={Allproducts} /> : <LoginPage />} />
              <Route path="/addproduct" element={user ? <AddProduct /> : <HomePage />} />
              <Route path="/cart" element={user ? <Cart /> : <LoginPage />} />
              <Route path="*" element={<Error />} />

              <Route path="/productDetails" element={<ProducDetails />}>
                <Route path=":prodId" element={<ProductInfo />} />
              </Route>

            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>

    </div>
  );
}

export default App;

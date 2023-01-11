
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import HomePage from "./Pages/Home/Home"
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import Error from './Pages/Error/ErrorPage'
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import HomeAllProducts from "./Pages/HomeAllProducts/HomeAllProducts";
import AddProduct from "./Components/Product/AddProduct/AddProduct";



function App() {

  //handle userAccount Name
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser ? currentUser.email : currentUser);
  })
  console.log(user);


  return (

    <div className="App">
      <BrowserRouter>
        <Layout>


          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/allproducts" element={user ? <HomeAllProducts /> : <LoginPage />} />
              <Route path="/addproduct" element={user ? <AddProduct /> : <HomePage />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>

    </div>
  );
}

export default App;

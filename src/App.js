import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
// import { Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { GoogleProvider, auth } from './Firebase/Firebase';


function App() {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ErrorMessage, setErrorMessage] = useState("")



  //Handle Login Exist Account
  const LoginHandeler = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          console.log("welcome");
        }

      }).catch((error) => {
        setErrorMessage(error.message);
        console.log(auth);
      });

  }



  //Handle Register with gmail.google.com
  const registerWithGoogle = async (e) => {
    e.preventDefault();

    await signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePicture = result.user.photoURL;
        localStorage.setItem("username", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePicture", profilePicture);

        if (auth) {
          console.log("welcome");
        }

      }).catch((error) => {
        console.log(error.message);
      })
  }


  return (
    <div className="App">

      <div >
        <h4 className="font-ar my-5 text-center" style={{ fontWeight: "bold" }}> تسجيل الدخول </h4>
        <form className="col-6 d-flex flex-column text-center mx-auto mt-5 font-ar" style={{}}>
          <span style={{ color: "red" }}>{ErrorMessage.replace("Firebase:", "")}</span>
          <form className="mb-3  text-center" controlId="formBasicEmail">
            <label  > البريد الالكتروني </label>
            <input
              className="text-center"
              type="email"
              placeholder="Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />

          </form>


          <label> الرقم السري </label>
          <input
            className='text-center'
            type="password"
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />


          <button
            variant="secondary"
            type="submit"
            onClick={LoginHandeler}
          >
            تسجيل الدخول <i className="fa-solid fa-envelope"></i>
          </button>
          <button
            className="btnprimary mt-2"
            type="submit"
            onClick={registerWithGoogle}
          >
            حساب جوجل <i className='fa-brands fa-google'></i>
          </button>
          <span className="text-muted">
            لن تتم مشاركه بياناتك مع اي شخص آخر
          </span>
        </form>
        <p className="font-ar my-5 py-5 text-center"> ليس لديك حساب ؟  </p>


      </div>
    </div>
  );
}

export default App;

import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleProvider, auth } from '../../Firebase/Firebase';



const LoginPage = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ErrorMessage, setErrorMessage] = useState("")
  const navegate = useNavigate()


  //Handle Login Exist Account
  const LoginHandeler = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navegate("/");
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
          navegate("/");
        }

      }).catch((error) => {
        console.log(error.message);
      })
  }


  return (
    <div >
      <h4 className="font-ar my-5 text-center" style={{ fontWeight: "bold" }}> تسجيل الدخول </h4>
      <Form className="col-6 d-flex flex-column text-center mx-auto mt-5 font-ar" style={{}}>
        <span style={{ color: "red" }}>{ErrorMessage.replace("Firebase:", "")}</span>
        <Form.Group className="mb-3  text-center" controlId="formBasicEmail">
          <Form.Label  > البريد الالكتروني </Form.Label>
          <Form.Control
            className="text-center"
            type="email"
            placeholder="Your E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> الرقم السري </Form.Label>
          <Form.Control
            className='text-center'
            type="password"
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="secondary"
          type="submit"
          onClick={LoginHandeler}
        >
          تسجيل الدخول <i className="fa-solid fa-envelope"></i>
        </Button>
        <Button
          variant="primary mt-2"
          type="submit"
          onClick={registerWithGoogle}
        >
          حساب جوجل <i className='fa-brands fa-google'></i>
        </Button>
        <Form.Text className="text-muted">
          لن تتم مشاركه بياناتك مع اي شخص آخر
        </Form.Text>
      </Form>
      <p className="font-ar my-5 py-5 text-center"> ليس لديك حساب ؟ <Link to="/register" className="text-danger" style={{ textDecoration: "none" }} >انشاء حساب جديد</Link> </p>


    </div>
  )
}

export default LoginPage
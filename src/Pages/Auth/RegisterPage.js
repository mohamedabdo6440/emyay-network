
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleProvider, auth } from '../../Firebase/Firebase';




const RegisterPage = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [ErrorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const registeration = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }

      }).catch((error) => {
        setErrorMessage(error.message);
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
          navigate("/");
        }

      }).catch((error) => {
        console.log(error.message);
      })
  }


  return (
    <div >
      <h4 className="font-ar my-5 text-center" style={{ fontWeight: "bold" }}> انشاء حساب جديد </h4>
      <Form className="col-6 d-flex flex-column text-center mx-auto mt-5 font-ar" >
        <span style={{ color: "red" }}>{ErrorMessage.replace("Firebase:", "")}</span>


        <Form.Group className="mb-3  " controlId="formBasicEmail">
          <Form.Label  > البريد الالكتروني </Form.Label>
          <Form.Control
            style={{ opacity: "0.6" }}
            className="p-2 text-center"
            type="email"
            placeholder="Enter Your E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> الرقم السري </Form.Label>
          <Form.Control
            style={{ opacity: "0.6" }}
            className="p-2 text-center"
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="secondary"
          type="submit"
          onClick={registeration}
        >
          انشاء حساب <i className="fa-solid fa-envelope"></i>
        </Button>



        <Button
          variant="primary mt-2"
          type="submit"
          onClick={registerWithGoogle}
        >
          تسجيل الدخول بحساب جوجل <i className='fa-brands fa-google'></i>
        </Button>


        <Form.Text className="text-muted">
          لن تتم مشاركه بياناتك مع اي شخص آخر
        </Form.Text>
      </Form>
      <p className="font-ar my-5 py-5 text-center">  لديك حساب ؟ <Link to="/login" className="text-danger" style={{ textDecoration: "none" }} > تسجيل الدخول </Link> </p>


    </div>
  )

}

export default RegisterPage;


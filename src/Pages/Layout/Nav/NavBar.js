import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SideBar from "../../../Components/SideBar/SideBar";

import { Outlet, NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase";
import './NavBar.css';

const NavBar = ({ loginState }) => {

    const [userIN, setUserIN] = useState(null)
    //  const Is_Login = localStorage.getItem("username");


    // //checked user exist everyTime
    onAuthStateChanged(auth, (currentUser) => {
        setUserIN(currentUser ? currentUser.email : currentUser)
    })


    //Hnadle LogOut
    const LogOut = async () => {
        await signOut(auth)
    }




    return (
        <>
            <Navbar bg="dark" expand="sm" className="navbar navBackground  sticky-top" style={{ height: "60px", padding: "10px", margin: "0" }}>
                <Container fluid>
                    <NavLink to="/" className="font-en text-light  mx-sm-2 mx-lg-5">
                        {" "}
                        <div>
                            <img src={""} className="logo" alt="logo" />{" "}
                        </div>
                    </NavLink>


                    <Navbar.Toggle
                        style={{ color: "white", backgroundColor: "white" }}
                        aria-controls="navbarScroll"
                    />



                    <Navbar.Collapse
                        className="bg-dark navBackground"
                        id="navbarScroll"
                        style={{
                            color: "white",
                            marginTop: "10px",
                            width: "100%",
                        }}
                    >



                        <Form.Control
                            type="search"
                            placeholder="إبحث...."
                            className="mx-sm-2 my-2 py-1 w-100 font-ar"
                            aria-label="Search"

                        />

                        <Nav
                            className="mx-sm-2 mx-lg-5 p-0"
                            style={{ maxHeight: "100px", color: "white" }}
                            navbarScroll
                        >
                            <NavLink
                                to="login"
                                className="nav-text d-flex my-auto mx-1 justify-content-center p-0"
                                style={{ color: "white", textDecoration: "none" }}
                            >


                                <div
                                    style={{
                                        color: "whie",
                                        fontSize: "10px",
                                        maxWidth: "150px",
                                        minWidth: "100px",
                                        opacity: "0.8",
                                    }}
                                    className="text-center font-ar mx-1 my-auto "
                                >

                                    {
                                        userIN !== null ? (

                                            ` مرحباً بك  ${userIN !== null ? userIN.replace("@gmail.com", "") : userIN}`

                                        ) : (
                                            "تسجيل الدخول"
                                        )

                                    }
                                </div>
                            </NavLink>

                            <NavLink
                                to="/"
                                className="nav-text d-flex  justify-content-center my-auto mx-1 p-0"
                                style={{ color: "white", textDecoration: "none" }}
                            >
                                <h3 className=" mt-2 me-2">
                                    <i className="fa-solid fa-cart-arrow-down "></i>
                                </h3>
                                <div
                                    style={{
                                        color: "whie",
                                        fontSize: "11px",
                                        width: "80px",
                                        opacity: "0.8",
                                    }}
                                    className="text-center font-ar my-auto text-info"
                                >
                                    <span>عربه التسوق</span>{" "}
                                </div>
                            </NavLink>

                            <Nav.Link
                                href="/"
                                className="nav-text d-flex  justify-content-center my-auto mx-1 p-0"
                                style={{ color: "white" }}
                            >
                                {userIN !== null ? (

                                    <>


                                        <div
                                            style={{ fontSize: "5px", width: "80px", cursor: "pointer" }}
                                            className="text-center text-secondary font-ar my-auto"
                                            onClick={LogOut}
                                        >
                                            {" "}
                                            <h6 className="p-2">مغادره</h6>{" "}
                                        </div>


                                    </>
                                ) : (
                                    <></>
                                )}

                            </Nav.Link>
                            <SideBar userIN={userIN} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default NavBar;

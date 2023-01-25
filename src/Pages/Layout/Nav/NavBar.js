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


    //checked user exist everyTime
    const [userIN, setUserIN] = useState(null)
    onAuthStateChanged(auth, (currentUser) => {
        setUserIN(currentUser ? currentUser.email : currentUser)
    })

    //Hnadle LogOut
    const LogOut = async () => {
        await signOut(auth)
    }




    return (
        <>
            <Navbar bg="dark" expand="sm" className="navbar navBackground  sticky-top " >
                <Container fluid>
                    <NavLink to="/" className="font-en text-light  mx-sm-2 mx-lg-5">
                        {" "}
                        <div className="logo">

                        </div>
                    </NavLink>


                    <Navbar.Toggle
                        style={{ backgroundColor: "white" }}
                        aria-controls="navbarScroll"
                    />



                    <Navbar.Collapse
                        className=" navBackground my-2 mx-0"
                        id="navbarScroll"
                        style={{
                            color: "white",
                        }}
                    >



                        <Form.Control
                            type="search"
                            placeholder="إبحث...."
                            className="mx-sm-2 my-2 py-1 w-100 font-ar"
                            aria-label="Search"

                        />

                        <Nav
                            className=" "
                            style={{}}
                            navbarScroll
                        >
                            <NavLink
                                to="login"
                                className="nav-text d-flex my-auto mx-1 justify-content-center p-0"
                                style={{ color: "white", textDecoration: "none" }}
                            >


                                <div
                                    style={{

                                        fontSize: "12px",
                                        maxWidth: "150px",
                                        minWidth: "100px",
                                        opacity: "0.8",
                                    }}
                                    className="text-center font-ar mx-1 my-auto text-warning py-1"
                                >

                                    {
                                        userIN !== null ? (

                                            `  مرحباً بك ${userIN !== null ? userIN.replace("@gmail.com", "") : userIN}`

                                        ) : (
                                            "تسجيل الدخول"
                                        )

                                    }
                                </div>
                            </NavLink>

                            <NavLink
                                to="cart"
                                className="nav-text d-flex  justify-content-center my-auto mx-1 p-0"
                                style={{ color: "white", textDecoration: "none" }}
                            >
                                <div className=" mt-2 me-2">

                                    <h3 className="btn  text-white position-relative">
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                           
                                        </span> */}
                                    </h3>
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
                                            style={{ fontSize: "16px", cursor: "pointer" }}
                                            className="text-center btn text-white font-ar my-auto  d-flex align-items-center"
                                            onClick={LogOut}
                                        >
                                            <i className="fa-solid fa-right-from-bracket"></i>

                                            <span className="mx-2 mb-2"> خروج</span>{" "}
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

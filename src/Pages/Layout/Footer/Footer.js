import React from 'react'
import './Footer.css'


const Footer = () => {
    return (




        <footer className="bg-dark text-center text-white">

            <div className="container p-4 pb-0">

                <section className="mb-4">

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>




                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>



                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa-brands fa-youtube"></i></a>
                </section>

            </div>



            <div className="text-center p-3 me-1 bg-dark">
                © 2022 Copyright
                <a className="text-danger ms-1 text-decoration-none" href="/">EMYAYNETWORK</a>
            </div>

        </footer>





    )
}

export default Footer;
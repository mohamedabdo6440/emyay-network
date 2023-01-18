import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Categores from '../Categores/Categores';
import { Link } from 'react-router-dom';

function SideBar({ userIN }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="" className='h-75 my-2' onClick={handleShow}>
                <div className='d-flex justify-content-center text-white'>
                    <span className='ms-2'>الكل</span>
                    <span> <i className="fa-sharp fa-solid fa-bars"></i></span>
                </div>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><div className=''><Link to="/"><i className="fa-solid fa-house text-dark"></i></Link></div></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Categores userIN={userIN} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;

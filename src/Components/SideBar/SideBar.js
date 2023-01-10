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
            <Button variant="" onClick={handleShow}>
                <div className='d-flex justify-content-center'>
                    <h5 className='ms-2 text-white'>الكل</h5>
                    <h5> <i className="fa-sharp fa-solid fa-bars"></i></h5>
                </div>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><div className=''><Link to="/"><i className="fa-solid fa-house text-info"></i></Link></div></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Categores userIN={userIN} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;

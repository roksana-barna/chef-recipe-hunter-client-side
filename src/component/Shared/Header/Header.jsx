import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Container>

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <div>
                            <h2 className='text-danger text-start px-2 me-5 mt-2 position-absolute top-0 start-0'>KoOkiliCiouS</h2>
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="mx-auto">

                                <Link className='me-3  ms-5 text-decoration-none text-dark' to="/">Home</Link>
                                <Link className='me-3 text-decoration-none text-dark' to="/reciepe">Reciepe</Link>
                                <Link className='me-3 text-decoration-none text-dark' to="/contact">Contact</Link>
                                <Link className='me-3 text-decoration-none text-dark' to="/blog">Blog</Link>
                            </Nav>
                            <Nav>

                                <Link to='/login'><Button variant="danger" >LogOut</Button></Link>
                                <Link to='/login'><Button variant="danger">Log In</Button></Link>



                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* <div className='d-flex'>
                    <div>
                        <h1 className='mt-5 fs-1 text-capitalize'><span className=' text-dark'>Choose</span><br /><span className='text-danger'>From</span><br /><span className=' text-dark'>Thousands of <span className=' text-warning'>Reciepes</span></span></h1>
                        <Button className='mt-5' variant="outline-primary">Get free Trial</Button>
                        <Button className='mt-5' variant="outline-secondary">Gift Card...</Button>
                    </div>
                    <img className='w-75' src={img} alt="" />
                </div> */}


            </Container>


        </div>
    );
};

export default Header;
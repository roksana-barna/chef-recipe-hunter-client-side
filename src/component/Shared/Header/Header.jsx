import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error));
    }
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
                                {user &&
                                    <img className='w-25 rounded-circle' src={user.photoURL} alt="" /> 
                                }

                                {
                                    user ? <Link to='/login'><Button onClick={handleLogOut} variant="danger" >LogOut</Button></Link> :
                                        <Link to='/login'><Button variant="danger">Log In</Button></Link>
                                }


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </Container>


        </div>
    );
};

export default Header;
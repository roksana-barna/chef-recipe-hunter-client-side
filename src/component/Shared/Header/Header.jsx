import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';

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

                                <ActiveLink className='me-3  ms-5 text-decoration-none text-danger' to="/">Home</ActiveLink>
                                <Link className='me-3 text-decoration-none text-dark' to="/contact">Contact</Link>
                                <Link className='me-3 text-decoration-none text-dark' to="/blog">Blog</Link>
                            </Nav>

                        </Navbar.Collapse>

                    </Container>
                    <Nav>
                        {
                            user ? <Link to='/login'><Button onClick={handleLogOut} variant="danger" >LogOut</Button></Link> :
                                <Link to='/login'><Button variant="danger">LogIn</Button></Link>
                        }
                        {user &&
                            <div className='ms-2'>
                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip>{user.displayName}</Tooltip>}>
                                    <img className='w-25 rounded-circle  text-right me-0' src={user.photoURL} alt="" />

                                </OverlayTrigger>

                            </div>
                        }

                    </Nav>
                </Navbar>


            </Container>


        </div>
    );
};

export default Header;
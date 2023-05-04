import React from 'react';
import  error from"../../assets/164-1646889_error-png-page-something-went-wrong-png-transparent.png";
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className='mx-auto w-50'>
            <h2>****404****</h2>
            <img src={error}alt="" />
        </Container>
    );
};

export default NotFound;
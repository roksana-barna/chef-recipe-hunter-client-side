import React from 'react';
import { Button, Container } from 'react-bootstrap';
import img from "../../assets/noodles.jpg";

const Banner = () => {
    return (
        <Container>
             <div className='d-flex'>
                    <div>
                        <h1 className='mt-5 fs-1 text-capitalize'><span className=' text-dark'>Choose</span><br /><span className='text-danger'>From</span><br /><span className=' text-dark'>Thousands of <span className=' text-warning'>Reciepes</span></span></h1>
                        <Button className='mt-5' variant="outline-primary">Get free Trial</Button>
                        <Button className='mt-5' variant="outline-secondary">Gift Card...</Button>
                    </div>
                    <img className='w-75' src={img} alt="" />
                </div>

            
        </Container>
    );
};

export default Banner;
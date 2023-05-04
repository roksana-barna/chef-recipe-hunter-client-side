import React from 'react';
import { Container } from 'react-bootstrap';
import kaiseki from "../../assets/Kaiseki_001.jpg"
import { FaAddressBook, FaAdjust } from 'react-icons/fa';

const HomaPage1 = () => {
    return (
        <Container className=' d-flex'>
            <div >
                <h1 className='pt-5 text-danger'>Our Very Special Menu</h1>
                <img className='w-50 pt-5' src={kaiseki} alt="" />
            </div>
            <div className='w-50'>
                <h1 className='pt-5 '>Kaiseki  <br /> appetizers
                    on a <br />wooden plate
                </h1>
                <p>Kaiseki, closely associated with tea ceremony (chanoyu), is a high form of hospitality through cuisine. The style is minimalist</p>
                <div className='d-flex'>
                    <div>
                        <h2 className='me-5 text-danger'><FaAdjust /></h2>
                        <p>Active Time</p>
                    </div>
                    <div>
                        <h2 className='ms-5 text-danger'><FaAddressBook /></h2>
                        <p className='ms-5'>Yield</p>
                    </div>
                    <div>
                        <h2 className='ms-5 text-danger'><FaAdjust /></h2>
                        <p className='ms-5'>Total Time</p>
                    </div>

                </div>
                <div className='d-flex'>
                    <p className='pt-5 flex-grow-1'>Created By <span className='text-danger'>Alex Williams</span></p>
                    <p className='pt-5 me-5'>21 recipes</p>


                </div>

            </div>


        </Container>
    );
};

export default HomaPage1;
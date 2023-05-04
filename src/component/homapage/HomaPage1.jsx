import React from 'react';
import { Container } from 'react-bootstrap';
import kaiseki from "../../assets/Kaiseki_001.jpg"

const HomaPage1 = () => {
    return (
        <Container className=' d-flex'>
           <div >
           <h1 className='pt-5 text-danger'>Our Very Special Menu</h1>
            <img className='w-50 pt-5' src={kaiseki}alt="" />
           </div>
           <div className='w-50'>
            <h1 className='pt-5 '>Kaiseki appetizers on a wooden plate
</h1>
           </div>
            
        </Container>
    );
};

export default HomaPage1;
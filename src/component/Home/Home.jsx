import React from 'react';
import Banner from '../banner/Banner';
import { Container } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import HomaPage1 from '../homapage/HomaPage1';
import Carocel from '../Carocel/Carocel';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
             <Cards></Cards>
             <Carocel></Carocel>
             <HomaPage1></HomaPage1>
            
        </Container>
    );
};

export default Home;
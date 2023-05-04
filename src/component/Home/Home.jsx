import React from 'react';
import Banner from '../banner/Banner';
import { Container } from 'react-bootstrap';
import Cards from '../Cards/Cards';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
             <Cards></Cards>

            
        </Container>
    );
};

export default Home;
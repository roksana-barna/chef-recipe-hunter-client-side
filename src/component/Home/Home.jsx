import React from 'react';
import Banner from '../banner/Banner';
import { Container } from 'react-bootstrap';
import Cards from '../Cards/Cards';
import { useNavigation } from 'react-router-dom';

const Home = () => {
    const navigation =useNavigation();
    return (
        <Container>
             <div>{navigation.state==='loading' ? "Loading..." :""}</div>
            <Banner></Banner>
             <Cards></Cards>

            
        </Container>
    );
};

export default Home;
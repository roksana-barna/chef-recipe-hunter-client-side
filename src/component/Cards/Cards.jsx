import React, { useEffect, useState } from 'react';
import {Col, Container, Row, } from 'react-bootstrap';
import ChefCard from '../ChefCard/ChefCard';

const Cards = () => {
    const [chefs,setChefs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data=>setChefs(data))
        .catch(error =>console.error(error))
    },[])
    return (
        <Container>
            <h2 className='text-center text-danger p-5'>Our Chefs</h2>  
           <div>
            <Row>
           
           { 
              chefs.map(chef=><ChefCard 
            key={chef.id}
            chef={chef}
            >
               
            </ChefCard>  
          )
        }
        </Row>
        </div>

            
        </Container>
    );
};

export default Cards;
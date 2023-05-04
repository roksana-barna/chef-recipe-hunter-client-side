import React, { useEffect, useState } from 'react';
import { Container, Row, } from 'react-bootstrap';
import ChefCard from '../ChefCard/ChefCard';

const Cards = () => {
    const [chefs,setChefs]=useState([])
    useEffect(()=>{
        fetch('https://b7a10-chef-recipe-hunter-server-side-roksana-barn-roksana-barna.vercel.app/chefs')
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
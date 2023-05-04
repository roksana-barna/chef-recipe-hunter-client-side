import React, { useState } from 'react';
import { Card, Col, Row, Toast } from 'react-bootstrap';
import { FaBookmark} from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




const Recipe = ({recipe}) => {
    const {method,name,ingredients,rating}=recipe;
    const [clicked,setClicked]=useState(false);
     const handleFavorite=()=>{
        setClicked(true);
         toast(<Toast>
         <Toast.Header>
           <strong className="me-auto text-info">Salmon Nigiri</strong>
           <small>good</small>
         </Toast.Header>
         <Toast.Body className='text-danger'>Method:1. Rinse the sushi rice until the water runs clear. 2. Combine the rice vinegar, sugar, and salt in a small saucepan and heat until the sugar dissolves. 3. Cook the sushi rice according to the package instructions. 4. Add the vinegar mixture to the cooked rice and stir to combine..</Toast.Body>
       </Toast>);
        
     }
     
    return (
       
    
        <div>
             <ToastContainer></ToastContainer>
            <Row xs={1} md={2} className="g-4">
      <Col>
        <Card Card style={{ width: '40rem' }} >
          <Card.Body className='bg-info'>
           
            <Card.Title className='text-danger'>{name}</Card.Title>
            <Card.Text>
            <p className='text-danger'>Ingredients:</p>
             <li>{ingredients}</li>
            </Card.Text>
            <p><span className='text-danger'>Method:</span>{method}</p>
            <div className='d-flex'>
            <p className='flex-grow-1'>Rating:{rating}</p>
            <h6  className='text-danger  '><FaBookmark onClick={handleFavorite} disabled={clicked}></FaBookmark></h6>
            </div>
            
          </Card.Body>
        </Card>
      </Col>
    
  </Row> 
            
        </div>
    );
};

export default Recipe;
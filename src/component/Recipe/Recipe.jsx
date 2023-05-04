import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaBookmark} from 'react-icons/fa';


const Recipe = ({recipe}) => {
    const {method,name,ingredients,rating}=recipe;
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
      <Col>
        <Card Card style={{ width: '40rem' }} >
          <Card.Body>
           
            <Card.Title className='text-danger'>{name}</Card.Title>
            <Card.Text>
            <p className='text-primary'>Ingredients:</p>
             <li>{ingredients}</li>
            </Card.Text>
            <p><span className='text-primary'>Method:</span>{method}</p>
            <div className='d-flex'>
            <p className='flex-grow-1'>Rating:{rating}</p>
            <h6 className='text-danger '><FaBookmark></FaBookmark></h6>
            </div>
            
          </Card.Body>
        </Card>
      </Col>
    
  </Row> 
            
        </div>
    );
};

export default Recipe;
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaThumbsUp} from "react-icons/fa";

const DetailsAll = ({details} ) => {
    const { name, picture, experience, numRecipes, likes, bio} = details;
    console.log(details)
    return (
        <Container className='d-flex'>
            <div>
              
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title><span className='text-danger'>Chef Name:</span>Card Title{name}</Card.Title>
                        <Card.Text>
                        <span className='text-warning'>Bio:</span>{bio}
                        </Card.Text>
                        <div className='d-flex'>
                        <p className='text-danger'><FaThumbsUp/>{likes}</p>
                        <p> <span className='text-danger ms-5'>Number of Recipes:</span>{numRecipes}</p>
                        </div>
                       
                        <p className='text-primary'> Experience:{experience}</p>
        

                    </Card.Body>
                </Card>
                
            </div>
             <div>
               
          
<Row xs={1} md={2} className="g-4">
      
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row> 
</div>




        </Container>
    );
};

export default DetailsAll;
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaThumbsUp} from "react-icons/fa";
import Recipe from '../Recipe/Recipe';

const DetailsAll = ({details} ) => {
    const { name, picture, experience, numRecipes, likes, bio,recipes} = details;
    console.log(details)
    return (
        <Container className='d-flex'>
            <div>
              
                {/* <Card style={{ width: '40rem' }}> */}
                <Card>
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
              <h2 className='text-center text-danger'>Famous Recipes</h2>
            {
              recipes?.map(recipe=><Recipe 
                key={recipe.id}
                recipe={recipe}
              ></Recipe>
               
                )
            }
    
            </div>
           
          <div>     
</div>
        </Container>
    );
};

export default DetailsAll;
import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row,} from 'react-bootstrap';

const ChefCard = ({chef}) => {
    const {name,picture,experience,numRecipes,likes}=chef;

    return (
<Col xs={6} md={4}>
              <h3>{name}</h3>
              <img className='w-50 h-50' src={picture} alt="" />
              <p>experience:{experience}</p>
              <p>likes:{likes}</p>
              <p>Number of Recipes:{numRecipes}</p>
              <button className="btn btn-danger text-warning">View Recipes</button>
</Col>
    );
};

export default ChefCard;
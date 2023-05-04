import React from 'react';
import { Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const ChefCard = ({chef}) => {
    const { name, picture, experience, numRecipes, likes,id } = chef;
    return (
        <Col xs={12} md={4}>

            <img className='w-50 h-50' src={picture} alt="" />
            <h4 className='pt-2'>{name}</h4>
            <p>Experience:{experience}</p>
            <p>likes:{likes}</p>
            <p>Number of Recipes:{numRecipes}</p>
            <Link to={`/chefdetails/${id}`}> <button className="btn btn-danger text-warning">View Recipes</button>
            </Link>

        </Col>
        
    );
};

export default ChefCard;
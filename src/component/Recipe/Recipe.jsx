import React, { useEffect, useState } from 'react';
import DetailsAll from '../DetailsAll/DetailsAll';

const Recipe = () => {
    const [recipes,setRecipes]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data=>setRecipes(data))
        .catch(error =>console.error(error))
    },[])
    return (
        <div>
           {
            recipes.map(rcp=><DetailsAll
            key={rcp.id}
            rcp={rcp}
            
            
            >

            </DetailsAll>)
           }

            
            
        </div>
    );
};

export default Recipe;
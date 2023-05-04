import React, { useEffect, useState } from 'react';
import DetailsAll from '../DetailsAll/DetailsAll';
import { useParams } from 'react-router-dom';

const ChefDetails = () => {
    const dynamic =useParams()
    console.log(dynamic.chefId)
    const [details,setDetails]=useState([])
    useEffect(()=>{
        fetch(`https://b7a10-chef-recipe-hunter-server-side-roksana-barn-roksana-barna.vercel.app/chefdetails/${dynamic.chefId}`)
        .then(res => res.json())
        .then(data=>setDetails(data))
        .catch(error =>console.error(error))
    },[])
    return (
        <div>
                <DetailsAll

                    details={details}
                >

                </DetailsAll>
        </div>
    );
};

export default ChefDetails;
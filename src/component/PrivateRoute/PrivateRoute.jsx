import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }

        if (user){
            return children;
        }
};

export default PrivateRoute;
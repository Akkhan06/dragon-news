import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/authProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRouter = ({children}) => {
    const {user, lodding} = useContext(AuthContext)

    const location = useLocation()
    if (lodding) {
        return <Spinner className='' animation='border' variant='primary'/>
    }
    console.log(location)
    if (user) {
        return children
    }
    return <Navigate replace /* MUST USE THIS STACTURE FOR TARGETED LOCATION**/ state={{from: location}}/** */ to="/login"> </Navigate>
    ;
};

 

export default PrivateRouter;
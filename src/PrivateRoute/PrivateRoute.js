import React, { useContext } from 'react';
import { AuthContext } from '../context/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const { loggedInUser } = useContext(AuthContext)
    const location = useLocation()

    if (!loggedInUser) {
        return <Navigate to='/log-in' state={{ from: location }} replace={true} />
    }
    return children

};

export default PrivateRoute;
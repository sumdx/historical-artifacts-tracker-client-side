import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }

    if(loading){
       return <span className="loading loading-dots loading-lg"></span>;
    }

    return <Navigate to="/login" state={{from:location}} replace/>;
};

export default PrivateRoute;
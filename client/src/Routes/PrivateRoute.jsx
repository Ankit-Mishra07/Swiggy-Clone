import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const {userData} = useSelector(state => state.userState)

    if(userData.length  === 0 || userData[0] === null) {
       return <Navigate to="/" />
    }

  return children
};

export default PrivateRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'



const OpenRoutes = ({children}) => {
    const {userData} = useSelector(state => state.userState)

    if(userData[0] !== null) {
      return <Navigate to="/restaurent" />
    }
  return children
};

export default OpenRoutes;

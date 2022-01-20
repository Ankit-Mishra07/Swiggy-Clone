import React from 'react';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail';
import {Routes, Route} from 'react-router-dom'
import Landing from '../Pages/Landing';
import PrivateRoute from './PrivateRoute';
const Routing = () => {
  return <>

  <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/restaurent" element={
      <PrivateRoute>
        
        <Home />
      </PrivateRoute>
      
      }></Route>
      <Route path="/restaurent/:id" element={
      <PrivateRoute>

        <ProductDetail />
      </PrivateRoute>
      
      }></Route>
  </Routes>

  </>;
};

export default Routing;

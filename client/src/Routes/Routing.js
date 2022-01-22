import React from 'react';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail';
import {Routes, Route} from 'react-router-dom'
import Landing from '../Pages/Landing';
import PrivateRoute from './PrivateRoute';
import OpenRoutes from './OpenRoutes';
import Checkout from '../Pages/Checkout';
const Routing = () => {
  return <>

  <Routes>
      <Route path="/" element={
        <OpenRoutes>
          <Landing />

        </OpenRoutes>
      }></Route>
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

      <Route path="/checkout" element={<Checkout />}></Route>
  </Routes>

  </>;
};

export default Routing;

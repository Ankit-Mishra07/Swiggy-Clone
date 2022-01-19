import React from 'react';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail';
import {Routes, Route} from 'react-router-dom'
const Routing = () => {
  return <>

  <Routes>
      <Route path="/restaurent" element={<Home />}></Route>
      <Route path="/restaurent/:id" element={<ProductDetail />}></Route>
  </Routes>

  </>;
};

export default Routing;

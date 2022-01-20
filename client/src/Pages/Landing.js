import React from 'react';
import Jumbo from '../components/Landing/JumboSection/Jumbo'
import Feature from '../components/Landing/FeaturesSection/Feature'
import Restaurant from '../components/Landing/Restaurants/Restaurant'
import Footer from '../components/Landing/Footer/Footer'
import Login from '../components/Landing/Login';
import Signup from '../components/Landing/Signup';
const Landing = () => {
  return <>
  <Login/>
  <Signup />
      <Jumbo/>
      <Feature/>
      <Restaurant/>
      <Footer/>

  </>;
};

export default Landing;

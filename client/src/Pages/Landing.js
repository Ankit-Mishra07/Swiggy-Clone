import React from 'react';
import Feature from "./Components/FeaturesSection/Feature";
import Restaurant from "./Components/Restaurants/Restaurant";
import Footer from './Components/Footer/Footer'
import Jumbo from "./Components/JumboSection/Jumbo";


const Landing = () => {
  return <>
   <Jumbo/>
      <Feature/>
      <Restaurant/>
      <Footer/>
  </>;
};

export default Landing;

import React from 'react'
import {Box, Stack} from "@mui/material";
import "./home.scss"
import FeaturedImg1 from "../images/featured-1.png"
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import ExtraBenifits from '../components/ExtraBenifits';

import VegetableCarosuel from '../components/VegetableCarosuel';
import FruitsCarosuel from '../components/FruitsCarosuel';
import BestDeals from '../components/BestDeals';
import Product from './Product';
import VerticalTabs from '../components/VerticalTabs';


const Home = () => {
  return (
    <Box className='home'
    >
      <Carousel/>
      <ExtraBenifits/>
      <Category/>
      <BestDeals/>
      <VegetableCarosuel/>
      <FruitsCarosuel/>
      {/* <VerticalTabs/> */}
      
    
        

    </Box>
  )
}

export default Home
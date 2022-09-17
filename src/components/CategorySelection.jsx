import React from 'react'
import { Box, Typography } from '@mui/material';
import "./CategorySelection.scss"
import { CategoryContext } from '../App';
import Vegetables from './products/Vegetables';
import { Link, Route, Routes } from 'react-router-dom';
import CategorySidebar from './CategorySidebar';
import Bakery from './products/Bakery';
import ColdDrink from './products/ColdDrink';
import Dairy from './products/Dairy';
import Snacks from './products/Snacks';
import Tea from './products/Tea';


const CategorySelection = () => {
    return (
        <Box className='category-selection'>
          <CategorySidebar/>
          <Routes>
            
            
          </Routes>
          {/* <Vegetables/> */}
        </Box>

    )
}

export default CategorySelection
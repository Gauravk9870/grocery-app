import React from 'react'
import { Box, Typography } from "@mui/material";
import "./Category.scss"
import { CategoryContext } from '../App';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <>
      <CategoryContext.Consumer>{(category) => {
        return (
          <Box className='category '>
            <Typography variant='h4' className='category__title'>Shop by Category</Typography>

            <Box className='category__container'>

              {
                category.map((item) => {
                  return (
                    <Link to="/category">
                      <Box className='category__item' key={item.id} >
                        <img src={item.img} alt={item.title} className='category__img' />
                      </Box>
                    </Link>
                  )
                })
              }
            </Box>
          </Box>
        )

      }}
      </CategoryContext.Consumer>
    </>

  )
}

export default Category
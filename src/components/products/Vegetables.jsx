import React from 'react'
import { VegetablesContext } from '../../App';
import ProductCard from '../ProductCard';
import { Box } from '@mui/material';
import "./Vegetables.scss";

const Vegetables = () => {
  return (
    <>
      <VegetablesContext.Consumer>{(value) => {
        return (
          <Box className='vegetables'>
          {value.map((data, index) => {
            return (
                <ProductCard data={data} key={index} />
                )
              })}

          </Box>
        )

      }}</VegetablesContext.Consumer>
    </>
  )
}

export default Vegetables
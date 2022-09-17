import React from 'react'
import "./BestDeals.scss"
import { Box, Typography } from '@mui/material';
// import { Vegetables , Fruits} from '../Data';
import ProductCard from './ProductCard';
import "./BestDeals.scss"
import { VegetablesContext, FruitsContext } from '../App';

const BestDeals = () => {
  return (
    <VegetablesContext.Consumer>{(vegetables) => {
      return (
        <FruitsContext.Consumer>{(fruits) => {
          return (
            <Box className='best-deal'>
              <Box className='best-deal__container'>

                <Box className='best-deal__title'>
                  <Typography variant='h4'>Best Offers</Typography>
                </Box>

                <Box className='best-deal__products'>
                  {
                    vegetables.map((item) => {
                      if (item.offer === true) {
                        return (
                          <ProductCard data={item} key={item.id} />
                        )
                      }
                    })
                  }
                  {
                    fruits.map((item) => {
                      if (item.offer === true) {
                        return (
                          <ProductCard data={item} key={item.id} />
                        )
                      }

                    })
                  }

                </Box>
              </Box>
            </Box>
          )
        }}</FruitsContext.Consumer>
      )
    }}
    </VegetablesContext.Consumer>
  )
}

export default BestDeals
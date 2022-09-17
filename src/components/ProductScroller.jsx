import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import ProductCard from './ProductCard';
import './ProductScroller.scss';

export default function ProductScroller({category,name}) {
  const [value, setValue] = React.useState(0);
  // console.log(vegetables);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        
        flexGrow: 1,
        maxWidth: { lg: "100%", xs: 320, sm: 480 },
      }}
    >
      <Box className='product__category'>
        <Box className='product__category__title'>
          <Typography variant='h4' >{name}</Typography>
        </Box>
        <Box className='show-more'>
          <button>Show More</button>
        </Box>
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        

       { category.map((item) => {
          return (
            <ProductCard data={item} key={item.id}/>
          )
        })
        }
         
          {/* <ProductCard name={} img={}/>
          <ProductCard name={} img={}/> */}
          
      </Tabs>
    </Box>
  );
}

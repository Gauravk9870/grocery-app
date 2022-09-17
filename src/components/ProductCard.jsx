import React from 'react'
import { Box,Typography } from '@mui/material';
import "./ProductCard.scss"
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import {Link} from 'react-router-dom'

const ProductCard = ({data}) => {
  return (
    
    // <Link to={`/product/${data.name}`}>
    <Link to={{pathname: `/product/${data.name}`}}>
        <Box className="product-card"
            sx={{
                position: "relative",
            }}
        >
            {
                    (data.offer===true)&&(
                    <Box
                    sx={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        padding: "0.2rem .5rem",
                        backgroundColor: "red",
                        color: "#fff",
                        borderRadius: "0 0 0 1rem",
                        fontSize: "1rem",
                    }}
                >
                    20% OFF
                </Box>)}

            <Box className="product__img" 
                sx={{
                    position: "relative",
                }}
            >
            <img 
                src={data.img} 
                alt={data.name} />
            
            </Box>
            <Box className="product__info">
                <Box className="product__title">
                    <Typography variant="h6">{data.name}</Typography>
                    <FiberManualRecordRoundedIcon className='v-label'/>
                </Box>
                <Box className="product__qty">1 kg</Box>
            </Box>
            <Box className="product__action">
                {(data.offer===true) ? <Box className="product__price"><strike style={{fontSize:"1rem", color:"gray", paddingRight:"1rem"}}> ₹ {data.price} </strike>₹ {(data.price - (data.price*(20/100)))}</Box> : <Box className="product__price">₹ {data.price}</Box>}
                <Box className="product__add">
                    <button>ADD</button>
                </Box>
            </Box>

            
        </Box>
    </Link>
    
  )
}

export default ProductCard
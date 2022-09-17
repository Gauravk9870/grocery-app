import React, { useState, useEffect } from 'react'
import "./Product.scss"
import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import { vegetablesData, fruitsData } from "../Data";
import { useLocation } from "react-router-dom";

import { VegetablesContext, FruitsContext } from '../App';


const Product = () => {
    const [isFav, setIsFav] = useState(false);
    // const [searchedProduct, setSearchedProduct] = useState("");

    const [productPrice, setProductPrice] = useState(0);
    const [productName, setProductName] = useState("");
    const [productImg, setProductImg] = useState("");

    let location = useLocation();

    useEffect(() => {
        const searchedProduct = location.pathname.split("/")[2];

        fruitsData.forEach(fruit => {
            if (fruit.name === searchedProduct) {
                setProductPrice(fruit.price);
                setProductName(fruit.name);
                setProductImg(fruit.img);
            }
        })

        vegetablesData.forEach(vegetable => {
            if (vegetable.name === searchedProduct) {
                setProductPrice(vegetable.price);
                setProductName(vegetable.name);
                setProductImg(vegetable.img);
            }
        })


    }, [location]);

    return(
        <Box className='product'>
            <Box className='product__container'>
                <Box className='product__img'>
                    <img src={productImg} alt="" />
                </Box>

                <Box className='product__action'>
                    <Box className='product__action-buttons'>
                        <button><AddIcon className='btn' /></button>

                        <button onClick={() => {
                            if (isFav) {
                                setIsFav(false);
                            } else {
                                setIsFav(true);
                            }
                        }}>
                            {
                                isFav ? <FavoriteIcon className='btn' style={{ color: "red" }} /> : <FavoriteBorderIcon className='btn' />
                            }
                        </button>

                        <button><ShoppingCartOutlinedIcon className='btn' /></button>
                    </Box>
                    <Box className='product__action-rating'>
                        <StarIcon className='rating' />
                        <StarIcon className='rating' />
                        <StarIcon className='rating' />
                        <StarIcon className='rating' />
                        <StarHalfOutlinedIcon className='rating' />
                    </Box>
                </Box>
            </Box>
            <Box className='product__info'>
                <Box className='product__info-name'>
                    <Typography variant='h1'>{productName}</Typography>
                    <Typography variant='h6'>₹ {productPrice} / Kg</Typography>
                </Box>

                <Box className='product__info-extra'>
                    <Typography variant='h6'>Special Offer 20% off</Typography>
                    <Typography variant='h6' color="gray">Free Delivery</Typography>

                    <Box className='payment-offers'>
                        <Typography variant='h6'>Bank Offer
                            <span className='offer-details'>
                                Extra 10% off on SBI Credit Card
                            </span>
                        </Typography>
                        <Typography variant='h6'>Special Offer
                            <span className='offer-details'>

                                Get extra 10% off (price inclusive of discount)
                            </span>
                        </Typography>
                    </Box>

                    <Box className='addBtn'>
                        <button>Add</button>
                    </Box>

                </Box>

                <Box className='product__info-extra-detail'>

                    <Box>
                        <Typography variant='h6' className='desc__title'>Description</Typography>
                        <Typography variant='h6' className='expiry-date'>
                            Expiry Date 26 Dec 2022
                        </Typography>

                        <Typography variant='h6' className='manufactured-date'>
                            Expiry Date 26 Dec 2022
                        </Typography>
                    </Box>
                </Box>

                <Box className="seller-info">
                    <Typography variant='h6'>Seller Details
                        <span className='address'>
                            Fresh24 Pvt Ltd
                        </span>
                    </Typography>
                    <Typography variant='h6'>Manufacturer Details
                        <span className='service'>
                            63 Ideas Infolabs Pvt. Ltd
                            9th floor, Wework Building, Outer Ring Road, Near central mall, Bellandur, Bangalore-560103
                        </span>
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default Product
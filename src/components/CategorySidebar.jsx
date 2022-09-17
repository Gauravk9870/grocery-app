import React from 'react'
import { Box, Typography } from '@mui/material';
import "./CategorySidebar.scss"
import { CategoryContext } from '../App';
import Vegetables from './products/Vegetables';
import { Link, Route, Routes } from 'react-router-dom';
import { categoryData } from '../Data';


const CategorySidebar = () => {
    return (
        <>
            <CategoryContext.Consumer>{(category) => {
                return (
                    <Box className='category-sidebar'>
                        <Box className='category-name'>
                            <Link to='/category/vegetables' className='link'>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[0].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[0].name}</Typography>

                            </Box>
                            </Link>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[1].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[1].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[2].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[2].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[3].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[3].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[4].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[4].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[5].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[5].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[6].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[6].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[7].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[7].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[8].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[8].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[9].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[9].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[10].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[10].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[11].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[11].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[12].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[12].name}</Typography>

                            </Box>
                            <Box className='category-name-item'>
                                <Box className='category-item-img'>
                                    <img src={categoryData[13].img} alt="" />
                                </Box>
                                <Typography variant='h6'>{categoryData[13].name}</Typography>

                            </Box>
                                    
                        </Box>
                    </Box>
                )
            }}
            </CategoryContext.Consumer>
        </>

    )
}

export default CategorySidebar
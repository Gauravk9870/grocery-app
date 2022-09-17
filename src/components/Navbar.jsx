import React from 'react'
import "./Navbar.scss"
import { Box, Badge, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../images/freshDrop.png"
import featuredImg1 from "../images/featured-1.png"

const Navbar = () => {
  return (
    <Box className='navbar'>
            <Box className='navbar-logo'>
                <img src={Logo} alt="logo" />
            </Box>
            <Box className="search">
                <Stack className="input">
                    <input type="text" placeholder='Search grocery products'/>
                    <SearchIcon className='search-icon'/>
                </Stack>
            </Box>
    
            <Stack className='accountAccessbility'>
                <FavoriteIcon /> 
                <ShoppingCartIcon />
                <span className='loginBtn'>Login</span>
            </Stack>
    </Box>
  )
}

export default Navbar
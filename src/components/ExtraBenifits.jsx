import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import "./ExtraBenifits.scss"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RestoreIcon from '@mui/icons-material/Restore';

const ExtraBenifits = () => {
  return (
    <Box
        className="extra-benifits"
    >
        <Stack  className="benifit">
            <LocalShippingIcon size="2rem" color="#ff6929"/>
            <Stack>
                <Typography variant="h3" fontSize="1.5rem" textTransform="uppercase" textAlign="center" fontWeight="bold">Superfast Delivery</Typography>

                <Typography variant="p" fontSize="1rem" textTransform="uppercase" textAlign="center">Get your order delivered to your doorstep at the earliest from dark stores near you.</Typography>
            </Stack>
        </Stack>

        
        <Stack  className="benifit">
            <MonetizationOnIcon size="2rem" color="#ff6929"/>
            <Stack>
                <Typography variant="h3" fontSize="1.5rem" textTransform="uppercase"textAlign="center" fontWeight="bold">Best Prices & Offers</Typography>
                <Typography variant="p" fontSize="1rem" textTransform="uppercase" textAlign="center">Cheaper prices than your local supermarket, great cashback offers to top it off.</Typography>

            </Stack>
        </Stack>
        <Stack className="benifit">
            <RestoreIcon size="2rem" color="#ff6929"/>
            <Stack>
                <Typography variant="h3" fontSize="1.5rem" textTransform="uppercase" textAlign="center" fontWeight="bold">Easy Return/Refund</Typography>
                <Typography variant="p" fontSize="1rem" textTransform="uppercase" textAlign="center">Not satisfied with a product? Return it at the doorstep & get a refund within hours.</Typography>

            </Stack>
        </Stack>
    </Box>
  )
}

export default ExtraBenifits
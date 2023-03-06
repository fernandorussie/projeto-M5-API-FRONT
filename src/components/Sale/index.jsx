import { Box, Container, Typography, createTheme } from '@mui/material';
import React from 'react';
import ImageBanner from '../../assets/banner/banner.png'
import {Banner, Span} from './style'
import { green, red } from '@mui/material/colors';

// import { Container } from './styles';

function Sale() {

    // const fontTheme = createTheme({
    //     palette:{
    //         primary: {
    //             main: red[500],
    //         },
    //     },
    // })

  return (
        <div>
            <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"}>
                <Box width={"50%"}>
                    <h3>Um jeito fácil de comer hamburguer</h3>
                    <Typography fontSize={25}>
                    <h1><Span>Está com fome?</Span> Apenas espere a comida na <Span>sua porta!</Span></h1>

                    </Typography>
                </Box>
                <Box width={"50%"}>
                    <Banner src={ImageBanner} alt="" />
                </Box>
            </Box>
            
        </div>
    );
}

export default Sale;
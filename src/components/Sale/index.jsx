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
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor: "mustard.main"}} >
                <Box width={"40%"} ml={10} pr={5} >
                    <Typography fontFamily='Anton' variant='h5' fontWeight={400}>Um jeito fácil de comer hamburguer</Typography>
                    <Typography fontFamily='Anton' variant='h2' fontWeight={400}><Span>Está com fome?</Span> Apenas espere <Span><br></br>a comida na sua porta!</Span></Typography>
                </Box>
                <Box width={"50%"}>
                    <Banner src={ImageBanner} alt="" />
                </Box>
            </Box>
            
        </div>
    );
}

export default Sale;
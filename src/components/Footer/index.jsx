import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
// import { Container } from './styles';

function Footer() {
  return (
    
    <Box
    sx={{
      width: "100%",
      height: "auto",
      backgroundColor: "neutral.main",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      color: 'white'
    }}
  >
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography  variant="h5">
            DEVBURGUER
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            {` Dev | Burguer | ${new Date().getFullYear()} `}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
}

export default Footer;
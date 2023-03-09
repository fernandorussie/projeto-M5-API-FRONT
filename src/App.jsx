import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors'

import "./App.css";
import GlobalStyle from "./styles/globalStyles";
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CartProvider } from "./contexts/CartContext";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#df2020',
        dark: '#9c1616',
        light: '#e54c4c',
        contrastText: '#fff',
      },
      secondary: {
          main: '#212245',
          dark:'#171730',
          light: '#4d4e6a',
          contrastText: '#fff',
      },
      neutral: {
        main: '#212121',
        light: '#fff',
        contrastText: '#fff',
      },
      mustard:{
        main: '#FFDB58',
        contrastText: '#fff',
      },
      typography: {
        fontFamily: [
          'Anton',
          'RocknRoll One',
          'sans-serif'
        ].join(',')
      }
    }
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <CssBaseline enableColorScheme={true} />
        <Container maxWidth disableGutters={true} >
          <CartProvider>
            <Navbar/>
            <Outlet/>
            <Footer/>
          </CartProvider>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';

import "./App.css";
import GlobalStyle from "./styles/globalStyles";
import { Outlet } from 'react-router-dom';

function App() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#212121',
        contrastText: '#fff',
      }
    }
  })
  return (
    <div>
      <GlobalStyle/>
      <CssBaseline enableColorScheme={true} />
      <Container maxWidth="xl">
        <Outlet/>
      </Container>
    </div>
  );
}

export default App;
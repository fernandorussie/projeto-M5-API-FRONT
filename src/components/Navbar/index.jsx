import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {NavLink, useNavigate } from 'react-router-dom';

import logo from '../../assets/icons/burguer.png'
import AccountMenu from '../AccountMenu';
import { Logo } from './style'
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


const pages = [
    {
        display: 'Promoção',
        path: "/promocao"
    },
    {
        display: 'Pedido',
        path: "/pedido"
    },
    {
        display: 'Contato',
        path: "/contato"
    }
];

const theme = createTheme({
  palette: {
    neutral: {
      main: '#212121',
      contrastText: '#fff',
    }
  }
})

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

const settings = [
    {
        display:'Perfil',
        function:""
    }, 
    {
        display:'Conta',
        function:""
    }, 
    {
        display:'Painel',
        function:""
    },
    {
        display:'Sair',
        function: function Loggout(){
            localStorage.clear();
            console.log("Deslogado, limpou tudo :)");
            navigate('/', { replace: true })
        }
        
    }
];
  return (
    <AppBar position="static" theme={theme} color='neutral'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo src={logo} alt="" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          {/* <AdbIcon  /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DevBurguer
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((item) => (
               <MenuItem key={item} onClick={handleCloseNavMenu}>
               <Typography textAlign="center" href={item.path}>{item.display}</Typography>
             </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DevBurguer
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((item, index) => (
                
            <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              href={item.path}>
                {item.display}
            </Button>
                
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", justifyContent: "center",
         alignItems: "center"}}>
            <AccountMenu/>
            {/* <Tooltip title="Abrir configurações">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar/>
              </IconButton>
            </Tooltip> */}
            <Tooltip title="Abrir carrinho de compras" sx={{margin: "0 15px"}}>
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </Tooltip>
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((item, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={item.function}>{item.display}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
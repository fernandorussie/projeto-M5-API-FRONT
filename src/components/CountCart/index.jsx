import React, {useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from './../../contexts/CartContext';
import { Tooltip } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  export default function BadgeVisibility() {

  const {carrinho, setCarrinho} = useContext(CartContext);

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <Tooltip title="Abrir carrinho de compras">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={carrinho.length} color="primary">
            <ShoppingCartIcon sx={{ color:'white' }}/>
          </StyledBadge>
        </IconButton>
      </Tooltip>
    </Box>
  );
}
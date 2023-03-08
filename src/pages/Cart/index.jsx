import React, {useEffect, useState, useContext} from 'react';

import { CartContext } from '../../contexts/CartContext';
// import { Container } from './styles';
import  Container  from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Cart() {
  const {carrinho, setCarrinho} = useContext(CartContext);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);


  return (
    <Container sx={{ mt: '15vh'}}>
      <h1> olá</h1>
        {carrinho.map((item, index) => {
          return(
            <Box key={index}>
              {item.nome}
              {item.preco}
              <Box>
              <Button onClick={()=>{setCount(count +1)}}>+</Button>
              <p>{count}</p>
              <Button>-</Button>
              </Box>
              
            </Box>
          )})}
          <h2>Total: {total.toFixed(3).slice(0,-1)}</h2>
    </Container>
  );
}

export default Cart;
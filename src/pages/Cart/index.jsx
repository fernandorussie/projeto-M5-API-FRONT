import React, {useEffect, useState, useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from "react-router-dom";
import {api} from '../../services/api'
import PaymentsIcon from '@mui/icons-material/Payments';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import * as C from './style'

function Cart() {
  const navigate = useNavigate();
  const {carrinho, setCarrinho, increment, decrement, remove, total, getTotal, itemNome} = useContext(CartContext);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([])

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  useEffect(() => {

    setCart(carrinho)
    getTotal()

  }, []); 

  const userID = JSON.parse(localStorage.getItem('userID'));
  const addOrder = async (e) => {
    e.preventDefault()
    await api.post('/pedido', {
      "nome_produto": itemNome !== []?itemNome:alert('Carrinho vazio') ,
      "cod_cliente": userID?userID:1,
      "valor_total": total,
      "status_pedido": 1,
      "data_pedido": today.toLocaleDateString()
    }).then((resp) => {
      console.log(resp)
      setCart([])
    })
    .catch(error => console.log(error))
  }
    if(cart.length === 0){
      return(
        <Container sx={{ height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <h2 style={{textAlign:'center'}}>Nenhum produto adicionado ao carrinho, por favor adicione um produto!</h2>

        </Container>
      )
    }else{
      return (
        <Container sx={{ mt: '15vh',}}>
          <form onSubmit={(e) => addOrder(e)}>
            {cart.map((item, index) => {
              return(
                <C.BoxCard key={index}>
                  <Box sx={{margin: '10px'}}>
                    <C.Img src={item.imagem} alt="" />
                  </Box>
    
                  <Box sx={{width: '80%', mr: '20px'}}>
                    <Box>
                      <C.Row>
                        <Typography fontSize={18} fontFamily='Anton' fontWeight={700} color='neutral'>{item.nome}</Typography>
                        <DeleteIcon onClick={() => remove(item.id)}/>
                      </C.Row>
                      <p>{item.descricao}</p>
                    </Box>
                    
                    <Box sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{mt:'10px'}}>
                        <Button onClick={() => decrement(item.id)}>-</Button>
                        <Button disabled><C.Count>{item.quant}</C.Count></Button>
                        <Button onClick={() => increment(item.id)}>+</Button>
                      </ButtonGroup> 
                      <Typography fontSize={18} fontFamily='Anton' fontWeight={700} color='primary'>R$ {item.preco * item.quant}</Typography>  
                    </Box>
                  </Box> 
                </C.BoxCard> 
              )})} 
              <C.BoxTotal>
                <h2>Total: {total.toFixed(3).slice(0,-1)}</h2>
                <Button variant="contained" endIcon={<PaymentsIcon />} type="submit">
                  Pagamento
                </Button>
              </C.BoxTotal>
          </form>
        </Container>
      );

    }
}

export default Cart;

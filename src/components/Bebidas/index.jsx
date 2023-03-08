import React, { useEffect, useState, useContext } from 'react'
import { api } from '../../services/api';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Img } from './style';
import { CartContext } from './../../contexts/CartContext';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const Product = () => {

    const {carrinho, setCarrinho} = useContext(CartContext)

    const [product, setProduct] = useState([]);
    useEffect(() => {
        async function getProduct(){
            await api.get('/bebidas').then((result) => {
                const bebidas = result.data
                setProduct(bebidas)
            })

        }
        getProduct()
    }, []);

    function handleAddToCart(nome, preco, imagem){ 
        const item = { nome, preco, imagem}
        setCarrinho([...carrinho, item])
    }
    
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>

        <Box sx={{ flexGrow: 1, margin:'0 30px' }}>
            <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} columns={{ xs: 1, sm: 6, md: 16 }}>
                {product.map(( item, index) => (
                <Grid item xs={1} sm={2} md={4} key={index}>
                    <Item>
                        <Box sx={{overflow:'hidden'}}>
                            <Img
                            src={item.imagem_bebida} 
                            title={item.nome_bebida} />
                            <Typography fontSize={25} fontWeight={700} fontFamily='RocknRoll One' sx={{ display: 'flex', justifyContent: 'center', margin:'10px 0'}}>{item.nome_bebida}</Typography>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent:'space-around', alignItems: 'center',}}>
                            <Typography fontSize={18} fontFamily='RocknRoll One' fontWeight={700} color='primary'>R$ {item.preco_bebida}</Typography>
                            <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleAddToCart(item.nome_bebida, item.preco_bebida, item.imagem_bebida)}>
                                <AddShoppingCartIcon fontSize='large' />
                            </IconButton>
                        </Box>
                    </Item>
                </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
  )
}

export default Product
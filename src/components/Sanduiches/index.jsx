import React, { useEffect, useState, useContext } from 'react'
import {api} from '../../services/api'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Img } from './style';
import { CartContext } from './../../contexts/CartContext';
import {Link, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center', 
    color: theme.palette.text.secondary,
  }));
  

const Product = () => {

    const {handleAddToCart} = useContext(CartContext)
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function getProduct(){
            await api.get('/sanduiches').then((result) => {
                const sanduiches = result.data
                setProduct(sanduiches)
            })
        }
        getProduct()
    }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
        
        <Box sx={{ flexGrow: 1, margin:'0 30px' }}>
            <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} columns={{ xs: 1, sm: 6, md: 16 }}>
                {product.map((item) => (
                <Grid item xs={1} sm={2} md={4} key={item.cod_sanduiche}>
                    <Item>
                        <Box sx={{overflow:'hidden'}}>
                            <Link to={`/produto/${item.cod_sanduiche}`}>
                            </Link>    
                            <Img
                                src={item.imagem_sanduiche} 
                                title={item.nome_sanduiche} />
                                
                            <Typography fontSize={25} fontWeight={700} fontFamily='RocknRoll One' sx={{ display: 'flex', justifyContent: 'center', margin:'10px 0'}}>
                                {item.nome_sanduiche}
                                <Link to={`/produto/${item.cod_sanduiche}`}>
                                </Link>
                            </Typography>
                        </Box>

                        <Box sx={{display: 'flex', justifyContent:'space-around', alignItems: 'center',}}>
                            <Typography fontSize={18} fontFamily='RocknRoll One' fontWeight={700} color='primary'>
                                R$ {item.preco_sanduiche}
                            </Typography>
                            <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleAddToCart(item.cod_sanduiche, item.nome_sanduiche, item.preco_sanduiche, item.imagem_sanduiche, item.descricao_sanduiche, item.qt_sanduiche)}>
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
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
    const {helloWorld} = useContext(CartContext)
    const [carrinho, setCarrinho] = useState([]);
    const [product, setProduct] = useState([]);
    console.log(helloWorld)

    useEffect(() => {
        api.get('/sanduiches').then((result) => {
            const sanduiches = result.data
            setProduct(sanduiches)
            // console.log(product)
        })
        
    }, []);

    function handleAddToCart(nome, preco, imagem){ 
        const item = { nome, preco, imagem}
        setCarrinho([...carrinho, item])
    }
    console.log(carrinho);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>

        <Box sx={{ flexGrow: 1, margin:'0 30px' }}>
            <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} columns={{ xs: 1, sm: 6, md: 16 }}>
                {product.map(( item, index) => (
                <Grid item xs={1} sm={2} md={4} key={index}>
                    <Item>
                        <Box sx={{overflow:'hidden'}}>
                            <Img
                            src={item.imagem_sanduiche} 
                            title={item.nome_sanduiche} />
                            <Typography fontSize={25} fontWeight={700} fontFamily='RocknRoll One' sx={{ display: 'flex', justifyContent: 'center', margin:'10px 0'}}>{item.nome_sanduiche}</Typography>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent:'space-around', alignItems: 'center',}}>
                            <Typography fontSize={18} fontFamily='RocknRoll One' fontWeight={700} color='primary'>R$ {item.preco_sanduiche}</Typography>
                            <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleAddToCart(item.nome_sanduiche, item.preco_sanduiche, item.imagem_sanduiche)}>
                                <AddShoppingCartIcon fontSize='large' />
                            </IconButton>
                        </Box>
                    </Item>
                </Grid>
                ))}
            </Grid>
        </Box>
        {/* <Divider/>
        
        <Typography  fontFamily='Anton' variant='h2' fontWeight={400}>Bebidas</Typography>
        <CountCart/>
        <Box sx={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'10px 10px'}}>
            {
                product.map((item) => {
                    return(
                    <Card key={item.cod_sanduiche} sx={{minWidth: 300, margin:'20px 10px'}} variant="outlined">
                        <Divider light />
                        <CardContent>
                            <Box >
                                <CardMedia 
                                sx={{height: 200}} 
                                image={item.imagem_sanduiche} 
                                title={item.nome_sanduiche} />
                                <Typography fontSize={22} fontWeight={700} fontFamily='RocknRoll One' sx={{ display: 'flex', justifyContent: 'center', margin: 5}}>{item.nome_sanduiche}</Typography>
                            </Box>
                            <CardActions sx={{display: 'flex', justifyContent:'space-between'}}>
                                <Typography fontFamily='RocknRoll One' fontWeight={700} color='primary'>R$ {item.preco_sanduiche}</Typography>
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </CardActions>
                        </CardContent>
                    </Card>)
                })
            }
        </Box> */}


        {/* <Divider/>
        <Typography  fontFamily='Anton' variant='h2' fontWeight={400}>Produtos</Typography>
        <CountCart/>
        <Box sx={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'10px 10px'}}>
            {
                product.map((item) => {
                    return(
                    <Card key={item.cod_sanduiche} sx={{minWidth: 300, margin:'20px 10px'}} variant="outlined">
                        <Divider light />
                        <CardContent>
                            <Box >
                                <CardMedia 
                                sx={{height: 200}} 
                                image={item.imagem_sanduiche} 
                                title={item.nome_sanduiche} />
                                <Typography fontSize={22} fontWeight={700} fontFamily='RocknRoll One' sx={{ display: 'flex', justifyContent: 'center', margin: 5}}>{item.nome_sanduiche}</Typography>
                            </Box>
                            <CardActions sx={{display: 'flex', justifyContent:'space-between'}}>
                                <Typography fontFamily='RocknRoll One' fontWeight={700} color='primary'>R$ {item.preco_sanduiche}</Typography>
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </CardActions>
                        </CardContent>
                    </Card>)
                })
            }
        </Box> */}
    </Box>
  )
}

export default Product
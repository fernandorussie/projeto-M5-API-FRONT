import React, { useEffect, useState } from 'react'
import { api } from '../../services/api';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        api.get('/sanduiches').then((result) => {
            const sanduiches = result.data
            setProduct(sanduiches)
            console.log(product)
        })
        
    }, []);
  return (
    <Box>
        <Typography>Produtos</Typography>
        {
            product.map((item) => {
                return(
                <Card key={item.cod_sanduiche}>
                    <CardContent>
                        <div>
                            <img src={item.imagem_sanduiche} alt="" />
                            <Typography>{item.nome_sanduiche}</Typography>
                        </div>
                        <CardActions>
                            <p>{item.preco_sanduiche}</p>
                            <button>Adicionar</button>
                        </CardActions>
                    </CardContent>
                </Card>)
            })
        }
    </Box>
  )
}

export default Product
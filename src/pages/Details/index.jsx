import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import {Link, useNavigate, useParams } from 'react-router-dom';

// import { Container } from './styles';

function Details() {
    const [produto, setProduto] = useState([]);
    const {carrinho, setCarrinho, products} = useContext(CartContext)
    const { id } = useParams()
    // console.log(id)

    useEffect(() => {
        function getProduct(){
            if(id){
                const lista = [products[0]]
                // console.log(lista[0])
                const data = lista[0].filter(item => item.cod_sanduiche == id
                )
                    // console.log(data, "details")
                    setProduto(data)
                
            }
        }; 
 
        getProduct()
    }, []); 

  return (
        <div> 
            {
                produto.map(item =>(
                    <div className="details" key={item.cod_sanduiche}>
                        <img src={item.imagem_sanduiche} alt=""/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.nome_sanduiche}</h2>
                                <span>${item.preco_sanduiche}</span>
                            </div>
                            <p>{item.descricao_sanduiche}</p>
                            <Link to="/cart" className="cart" onClick={() => addCart(item.cod_sanduiche)}>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                ))
                }
        </div>
    );
}

export default Details;
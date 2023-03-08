import { createContext, useState, useEffect } from "react";
export const CartContext = createContext({})
import { api } from '../../services/api';

export const CartProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function getProducts(){
            await api.get('/sanduiches').then((result) => {
                const sanduiches = result.data
                setProducts([
                    sanduiches
                ])
            }) 
            await api.get('/bebidas').then((result) => {
                const bebidas = result.data              
                setProducts(prevList => [...prevList, bebidas]) 
            })
        }
        getProducts()
        
    }, []);


    // console.log(products[0], "Sanduiche - cartContext")

    function handleAddToCart(id, nome, preco, imagem, descricao){ 
        // const data = products[0].filter(item => {
        //     return item.cod_produto === id
        // })
        // setCarrinho([...carrinho, data])
        // console.log(carrinho, "carrinho")

        // const check = carrinho.every(item => {
        //     return item.cod_produto !== id
        // })
        // console.log(check)
        const data = { id, nome, preco, imagem, descricao}

        setCarrinho([...carrinho, data])
    }

    function increment(id){
        const count = 1
        carrinho.forEach(item => {
            if(item.cod_produto === id){
                count === 1 ? count = 1 : count -=1
            }
        })
        setCarrinho(carrinho)
    }

    function decrement(id){
        carrinho.forEach(item => {
            if(item.cod_produto === id){
                count += 1;
            }
        })   
        setCarrinho(carrinho) 
    }

    return (
        <CartContext.Provider value={{carrinho, setCarrinho, products, handleAddToCart, increment, decrement}}>
        {children}
        </CartContext.Provider>
    )
}
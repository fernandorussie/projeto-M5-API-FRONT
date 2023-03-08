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
    
    function handleAddToCart(){ 
        const item = { nome, preco, imagem}
        setCarrinho([...carrinho, item])
    }

    return (
        <CartContext.Provider value={{carrinho, setCarrinho, products}}>
        {children}
        </CartContext.Provider>
    )
}
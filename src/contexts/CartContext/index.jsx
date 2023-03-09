import { createContext, useState, useEffect } from "react";
export const CartContext = createContext({})
import { api } from '../../services/api';

export const CartProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [itemNome, setItemNome] = useState([]);

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

    function handleAddToCart(id, nome, preco, imagem, descricao, quant){ 
        const data = { id, nome, preco, imagem, descricao, quant}
        // console.log(data)
        const check = carrinho.every(item => {
            return item.id !== id
        }) 
        if(check){
            setCarrinho([...carrinho, data])
            
            carrinho.forEach(item => { 
                if(item !== ""){
                    setItemNome([...itemNome, item.nome, item.quant])
                }
            })
            console.log(itemNome)
        }else{
            alert('Produto já adicionado no carrinho')
        }
        
    } 

    const increment = (id) => {
        carrinho.forEach(item => {
            if(item.id == id){
                item.quant += 1;
            }  
        })
        setCarrinho(carrinho)
        getTotal()
    } 

    const decrement = (id) => {
        carrinho.forEach(item => { 
            if(item.id == id){ 
                item.quant == 1 ? item.quant = 1 : item.quant -=1
            }
            // console.log(item.quant) 
        })
        setCarrinho(carrinho)
        getTotal()
    }  
     
    const remove = (id) => {
        carrinho.forEach((item, index) => {
            if(item.id === id){ 
                carrinho.splice(index, 1)
            }
        })
        setCarrinho(carrinho)
        getTotal()
    }

    const getTotal = () => {
        const tot = carrinho.reduce((prev, item) => {
            return prev + (item.preco * item.quant)
        },0)
        setTotal(tot)
    }
 
    return (
        <CartContext.Provider value={{carrinho, products, setCarrinho, handleAddToCart, increment, decrement, remove, total, getTotal, itemNome}}>
        {children}
        </CartContext.Provider>
    )
} 
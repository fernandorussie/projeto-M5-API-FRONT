import { createContext } from "react";
export const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const helloWorld = 'Olá Mundo'

    return (
            <CartContext.Provider value={{helloWorld}}>
            {children}
            </CartContext.Provider>
            )
}
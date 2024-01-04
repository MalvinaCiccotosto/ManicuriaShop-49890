import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }
    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

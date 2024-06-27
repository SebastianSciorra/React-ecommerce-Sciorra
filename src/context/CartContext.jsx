import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (articulo, quantity) => {
        if (!isInCart(articulo.id)) {
            setCart(prev => [...prev, { ...articulo, quantity }]);
        } else {
            alert("El producto ya está en el carrito");
        }
    };

    const removeItem = (articuloId) => {
        const cartUpdated = cart.filter(prod => prod.id !== articuloId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (articuloId) => {
        return cart.some(prod => prod.id === articuloId);
    };

    const totalQuantity = () => {
        return cart.reduce((acc,prod) => acc + prod.quantity, 0);
    };

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, clearCart, totalPrice, totalQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};


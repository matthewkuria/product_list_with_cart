"use client";
import { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
        setCartItems((prevCartItems) => {
            if (prevCartItems[product.id]) {
                return {
                    ...prevCartItems,
                    [product.id]: {
                        ...prevCartItems[product.id],
                        quantity: prevCartItems[product.id].quantity + 1
                    }
                };
            } else {
                return {
                    ...prevCartItems,
                    [product.id]: {
                        ...product,
                        quantity: 1
                    }
                };
            }
        });
    };

    const increaseQuantity = (productId) => {
        setCartItems((prevCartItems) => ({
            ...prevCartItems,
            [productId]: {
                ...prevCartItems[productId],
                quantity: prevCartItems[productId].quantity + 1
            }
        }));
    };

    const decreaseQuantity = (productId) => {
        setCartItems((prevCartItems) => {
            const updatedItems = { ...prevCartItems };
            if (updatedItems[productId].quantity > 1) {
                updatedItems[productId].quantity -= 1;
            } else {
                delete updatedItems[productId];
            }
            return updatedItems;
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity,  decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};



import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);


    useEffect(() => {
        const storedCartCount = parseInt(localStorage.getItem('cartCount')) || 0;
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const storedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

        setCartCount(storedCartCount);
        setCartItems(storedCartItems);
        setWishlistItems(storedWishlistItems);
    }, []);


    const addToCart = (product) => {
        if (!cartItems.some(cartItem => cartItem.id === product.id)) {
            const newCartItems = [...cartItems, product];
            setCartItems(newCartItems);
            setCartCount(newCartItems.length);
            localStorage.setItem('cartCount', newCartItems.length);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));

            const updatedWishlist = wishlistItems.filter(item => item.id !== product.id);
            setWishlistItems(updatedWishlist);
            localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
        }
    };


    const clearCart = () => {
        setCartItems([]);
        setCartCount(0);
        localStorage.removeItem('cartCount');
        localStorage.removeItem('cartItems');
    };


    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => {
            const updatedWishlist = [...prevItems, product];
            localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlistItems.filter(item => item.id !== productId);
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
        setCartCount(updatedCartItems.length);
        localStorage.setItem('cartCount', updatedCartItems.length);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <CartContext.Provider value={{
            cartCount,
            cartItems,
            addToCart,
            clearCart,
            wishlistItems,
            addToWishlist,
            removeFromWishlist,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
};


import React, { createContext, useState, useContext } from 'react';

// CartContext banaya
export const CartContext = createContext();

// CartProvider component jo sare children components ko cart state provide karega
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Cart items ka state

  // Item add karne ka function
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If exists, update quantity
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        // If not, add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Item remove karne ka function
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Quantity update karne ka function (increase/decrease)
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
        .filter((item) => item.quantity > 0) // Remove if quantity drops to 0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to easily use cart context
export const useCart = () => useContext(CartContext);
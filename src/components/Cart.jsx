import React from 'react';
import { useCart } from '../context/CartContext'; // useCart hook import kiya
import './Cart.css'; // Cart page ke liye styling

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleQuantityChange = (itemId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      // Price string se number parse karein. "₹120/kg" -> 120
      const priceValue = parseFloat(item.price.replace('₹', '').split('/')[0]);
      if (!isNaN(priceValue)) {
        total += priceValue * item.quantity;
      }
    });
    return total.toFixed(2); // Do decimal places tak
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <div className="cart-items-grid">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{item.price}</p>
                <div className="cart-quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                    min="1"
                    className="quantity-input"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Cart Total: ₹{calculateTotal()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
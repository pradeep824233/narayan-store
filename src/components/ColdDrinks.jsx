import React from "react";
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import "./CategoryStyle.css";

const coldDrinksItems = [
  { id: 1, name: "Coca-Cola", price: "₹40/bottle", img: "/images/cocacola.jpg" },
  { id: 2, name: "Pepsi", price: "₹40/bottle", img: "/images/pepsi.jpeg" },
  { id: 3, name: "Sprite", price: "₹40/bottle", img: "/images/sprite.jpg" },
  { id: 4, name: "Maaza", price: "₹35/bottle", img: "/images/maaza.jpg" },
  { id: 5, name: "Fanta", price: "₹40/bottle", img: "/images/fanta.jpeg" },
  { id: 6, name: "Limca", price: "₹40/bottle", img: "/images/limica.jpeg" },
  { id: 7, name: "Slice", price: "₹35/bottle", img: "/images/slice.jpeg" },
  { id: 8, name: "Thums Up", price: "₹40/bottle", img: "/images/thumsup.jpeg" },
  { id: 9, name: "Red Bull", price: "₹90/can", img: "/images/redbull.jpeg" },
  { id: 10, name: "7 Up", price: "₹40/bottle", img: "/images/7up.jpeg" },
  { id: 11, name: "Mountain Dew", price: "₹40/bottle", img: "/images/mountaindew.jpeg" },
  { id: 12, name: "Appy Fizz", price: "₹50/bottle", img: "/images/AppyFizz.jpeg" },
  { id: 13, name: "Mirinda", price: "₹40/bottle", img: "/images/morinda.png" },
  { id: 14, name: "Soda Water", price: "₹30/bottle", img: "/images/sodawater.jpeg" },
  { id: 15, name: "Peach Drink", price: "₹35/bottle", img: "/images/peachdrink.jpeg" },
];

const ColdDrinks = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
    navigate('/cart');
  };

  return (
    <div className="category-container">
      <h2>Cold Drinks & Refreshments</h2>
      <div className="category-grid">
        {coldDrinksItems.map((item) => (
          <div key={item.id} className="category-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <div className="button-group">
              <button className="btn-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              <button className="btn-buy" onClick={() => handleAddToCart(item)}>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColdDrinks;

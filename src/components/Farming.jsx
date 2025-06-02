import React from "react";
import "./CategoryStyle.css";
import { useCart } from '../context/CartContext';

const farmingItems = [
  { id: 1, name: "Khad", price: "₹500/bag", img: "/images/urea.jpeg" },
  { id: 2, name: "Potash", price: "₹600/bag", img: "/images/potash.jpeg" },
  { id: 3, name: "Urea", price: "₹400/bag", img: "/images/urea.jpeg" },
  { id: 4, name: "Kitnashak Dawai", price: "₹250/bottle", img: "/images/kitnashak.jpeg" },
  { id: 5, name: "Seeds (Wheat)", price: "₹120/kg", img: "/images/wheat-seeds.jpeg" },
  { id: 6, name: "Seeds (Corn)", price: "₹150/kg", img: "/images/corn-seeds.jpeg" },
  { id: 7, name: "Seeds (Rice)", price: "₹140/kg", img: "/images/rice-seeds.jpeg" },
  { id: 8, name: "Insecticide Spray", price: "₹300/bottle", img: "/images/insecticide.jpeg" },
  { id: 9, name: "Fungicide Spray", price: "₹350/bottle", img: "/images/fungicide.jpeg" },
  { id: 10, name: "Compost", price: "₹200/bag", img: "/images/compost.jpeg" },
  { id: 11, name: "Pesticide", price: "₹400/bottle", img: "/images/pesticide.jpeg" },
  { id: 12, name: "Organic Fertilizer", price: "₹450/bag", img: "/images/organic-fertilizer.jpeg" },
  { id: 13, name: "Weed Killer", price: "₹300/bottle", img: "/images/weed-killer.jpeg" },
  { id: 14, name: "Soil Testing Kit", price: "₹1200/kit", img: "/images/soil-testing.jpeg" },
  { id: 15, name: "Irrigation Pipes", price: "₹50/meter", img: "/images/irrigation-pipe.jpeg" },
];

const Farming = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  const handleBuyNow = (item) => {
    alert(`Proceeding to buy: ${item.name}`);
    // Future: Navigate to /checkout page or open payment modal
  };

  return (
    <div className="category-container">
      <h2>Farming & Agricultural Products</h2>
      <div className="category-grid">
        {farmingItems.map((item) => (
          <div key={item.id} className="category-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <div className="button-group">
              <button className="buy-btn" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
              <button className="buy-now-btn" onClick={() => handleBuyNow(item)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Farming;

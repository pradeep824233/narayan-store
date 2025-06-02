import React from "react";
import "./CategoryStyle.css";
import { useCart } from '../context/CartContext';  // CartContext se hook import karo

const householdItems = [
  { id: 1, name: "Surf Excel Detergent", price: "₹200/pack", img: "/images/surf-excel.jpeg" },
  { id: 2, name: "Colgate Toothpaste", price: "₹80/pack", img: "/images/colgate.jpeg" },
  { id: 3, name: "Lux Soap", price: "₹40/piece", img: "/images/lux-soap.jpeg" },
  { id: 4, name: "Pantene Shampoo", price: "₹150/bottle", img: "/images/pantene.jpeg" },
  { id: 5, name: "Dettol Soap", price: "₹45/piece", img: "/images/dettol-soap.jpeg" },
  { id: 6, name: "Lifebuoy Soap", price: "₹50/piece", img: "/images/lifebuoy.jpeg" },
  { id: 7, name: "Harpic Toilet Cleaner", price: "₹130/bottle", img: "/images/harpic.jpeg" },
  { id: 8, name: "Lizol Floor Cleaner", price: "₹110/bottle", img: "/images/lizol.jpeg" },
  { id: 9, name: "Vim Dishwash Liquid", price: "₹70/bottle", img: "/images/vim.jpeg" },
  { id: 10, name: "Comfort Fabric Conditioner", price: "₹160/bottle", img: "/images/Comfort.jpeg" },
  { id: 11, name: "Patanjali Aloe Vera Gel", price: "₹90/tube", img: "/images/patanjali-aloe.jpeg" },
  { id: 12, name: "Detergent Powder", price: "₹120/pack", img: "/images/detergent-powder.jpeg" },
  { id: 13, name: "Gillette Shaving Cream", price: "₹140/tube", img: "/images/gillette.jpeg" },
  { id: 14, name: "Vaseline Petroleum Jelly", price: "₹100/pack", img: "/images/vaseline.jpeg" },
  { id: 15, name: "Pepsodent Toothpaste", price: "₹75/pack", img: "/images/pepsodent.jpeg" },
];

const Household = () => {
  const { addToCart } = useCart();  // context se function lo

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  const handleBuyNow = (item) => {
    alert(`Proceeding to buy: ${item.name}`);
    // Future: checkout page ya payment modal ka code yaha add karo
  };

  return (
    <div className="category-container">
      <h2>Household & Personal Care</h2>
      <div className="category-grid">
        {householdItems.map((item) => (
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

export default Household;

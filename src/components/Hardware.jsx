import React from "react";
import "./CategoryStyle.css";
import { useCart } from "../context/CartContext"; // ✅ Import Cart context

const hardwareItems = [
  { id: 1, name: "Nut", price: "₹10/piece", img: "/images/nut.jpeg" },
  { id: 2, name: "Washer", price: "₹8/piece", img: "/images/washer.jpeg" },
  { id: 3, name: "Blade", price: "₹150/piece", img: "/images/blade.jpeg" },
  { id: 4, name: "Loha Katne Wala", price: "₹400/piece", img: "/images/loha-katne-wala.jpeg" },
  { id: 5, name: "Screwdriver", price: "₹120/piece", img: "/images/screwdriver.jpeg" },
  { id: 6, name: "Hammer", price: "₹250/piece", img: "/images/hammer.jpeg" },
  { id: 7, name: "Drill Machine", price: "₹1200/piece", img: "/images/drill-machine.jpeg" },
  { id: 8, name: "Pliers", price: "₹180/piece", img: "/images/pliers.jpeg" },
  { id: 9, name: "Wrench", price: "₹150/piece", img: "/images/wrench.jpeg" },
  { id: 10, name: "Measuring Tape", price: "₹100/piece", img: "/images/measuring-tape.jpeg" },
  { id: 11, name: "Nail Set", price: "₹70/box", img: "/images/nail-set.jpeg" },
  { id: 12, name: "Chisel", price: "₹90/piece", img: "/images/chisel.jpeg" },
  { id: 13, name: "Level Tool", price: "₹160/piece", img: "/images/level-tool.jpeg" },
  { id: 14, name: "Sanding Paper", price: "₹50/pack", img: "/images/sanding-paper.jpeg" },
  { id: 15, name: "Safety Gloves", price: "₹120/pair", img: "/images/safety-gloves.jpeg" },
];

const Hardware = () => {
  const { addToCart } = useCart(); // ✅ Use context hook

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  const handleBuyNow = (item) => {
    alert(`Proceed to buy ${item.name}`);
    // Future: Redirect to checkout page or handle buy now logic
  };

  return (
    <div className="category-container">
      <h2>Hardware Tools</h2>
      <div className="category-grid">
        {hardwareItems.map((item) => (
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

export default Hardware;

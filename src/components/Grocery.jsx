import React from "react";
import "./CategoryStyle.css";
import { useCart } from '../context/CartContext';

const groceryItems = [
  { id: 1, name: "Chana Dal", price: "₹120/kg", img: "/images/chanadal.jpeg" },
  { id: 2, name: "Moong Dal", price: "₹130/kg", img: "/images/moongdal.jpeg" },
  { id: 3, name: "Masoor Dal", price: "₹110/kg", img: "/images/masoor dal.jpeg" },
  { id: 4, name: "Urad Dal", price: "₹140/kg", img: "/images/urad-da.jpeg" },
  { id: 5, name: "Basmati Rice", price: "₹80/kg", img: "/images/basmati rice.jpeg" },
  { id: 6, name: "Wheat Flour", price: "₹40/kg", img: "/images/wheatfloured.jpeg" },
  { id: 7, name: "Oats", price: "₹150/kg", img: "/images/oats.jpeg" },
  { id: 8, name: "Barley", price: "₹70/kg", img: "/images/barley.jpg" },
  { id: 9, name: "Kurkure", price: "₹20/pack", img: "/images/kurkure.jpeg" },
  { id: 10, name: "Lays Chips", price: "₹25/pack", img: "/images/lays.jpeg" },
  { id: 11, name: "Namkeen Mixture", price: "₹100/kg", img: "/images/mixture.jpeg" },
  { id: 12, name: "Bhujia", price: "₹90/kg", img: "/images/bhujia.jpeg" },
  { id: 13, name: "Chili Powder", price: "₹150/kg", img: "/images/chilli-powder.jpeg" },
  { id: 14, name: "Turmeric Powder", price: "₹120/kg", img: "/images/turmeric-powder.jpeg" },
  { id: 15, name: "Cumin Powder", price: "₹130/kg", img: "/images/cumin-powder.jpeg" },
  { id: 16, name: "Coriander Powder", price: "₹110/kg", img: "/images/coriander-powder.jpeg" },
  { id: 17, name: "Tata Tea", price: "₹200/pack", img: "/images/tata-tea.jpeg" },
  { id: 18, name: "Nescafe Coffee", price: "₹250/pack", img: "/images/nescafe.jpeg" },
  { id: 19, name: "Fresh Juice", price: "₹30/bottle", img: "/images/fresh-juice.jpeg" },
  { id: 20, name: "Coca-Cola", price: "₹40/bottle", img: "/images/cocacola.jpg" },
  { id: 21, name: "White Sugar", price: "₹45/kg", img: "/images/sugar.jpeg" },
  { id: 22, name: "Vegetable Oil", price: "₹120/litre", img: "/images/vegetable-oil.jpeg" },
  { id: 23, name: "Almonds", price: "₹700/kg", img: "/images/almonds.jpeg" },
  { id: 24, name: "Raisins", price: "₹400/kg", img: "/images/raisins.jpeg" },
];

const Grocery = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  const handleBuyNow = (item) => {
    alert(`Proceeding to buy: ${item.name}`);
    // Future: Redirect to checkout page
  };

  return (
    <div className="category-container">
      <h2>Grocery Products</h2>
      <div className="category-grid">
        {groceryItems.map((item) => (
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

export default Grocery;

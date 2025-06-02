import React from 'react';
import './Product.css';

// const products = [
//   {
//     name: "",
//     category: "Grocery",
//     image: "/images/aata.jpg",
//     description: "High quality wheat flour for daily use."
//   },
//   {
//     name: "Diwali Lights",
//     category: "Decoration",
//     image: "/images/lights.jpg",
//     description: "Decorative lights for festivals and occasions."
//   },
//   {
//     name: "Urea (यूरिया)",
//     category: "Fertilizer",
//     image: "/images/urea.jpg",
//     description: "Essential fertilizer for crops."
//   },
//   {
//     name: "Potash",
//     category: "Fertilizer",
//     image: "/images/potash.jpg",
//     description: "Boost plant growth and health."
//   },
//   {
//     name: "Pesticide Spray (कीटनाशक)",
//     category: "Pesticide",
//     image: "/images/pesticide.jpg",
//     description: "Protect crops from harmful pests."
//   },
//   {
//     name: "Iron Cutting Blade",
//     category: "Hardware",
//     image: "/images/blade.jpg",
//     description: "Strong blade for cutting iron and steel."
//   },
//   {
//     name: "Cold Drink - Coke",
//     category: "Beverage",
//     image: "/images/coke.jpg",
//     description: "Chilled and refreshing cold drink."
//   },
//   {
//     name: "Nut & Washer",
//     category: "Hardware",
//     image: "/images/nut.jpg",
//     description: "Hardware essentials for basic fitting work."
//   }
// ];

const Products = () => {
  return (
    <div className="products-container">
      <h2>Available Products</h2>
      {/* <div className="products-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="category">{item.category}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Products;

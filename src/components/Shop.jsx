import React, { useState } from 'react';
import Products from './Home';
import Grocery from './Grocery';
import Hardware from './Hardware';
import Farming from './Farming';
import Household from './Household';
import ColdDrinks from './ColdDrinks';

import './Shop.css'; // You can style sidebar or tabs from here
import Home from './Home';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
  // { id: 'all', name: '🛒 All Products' },
  { id: 'grocery', name: '🥦 Groceries' },
  { id: 'hardware', name: '🔧 Hardware Essentials' },
  { id: 'farming', name: '🌾 Farming Supplies' },
  { id: 'household', name: '🧼 Household Items' },
  { id: 'colddrinks', name: '🥤 Cold Drinks' },
];


  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 'grocery':
        return <Grocery />;
      case 'hardware':
        return <Hardware />;
      case 'farming':
        return <Farming />;
      case 'household':
        return <Household />;
      case 'colddrinks':
        return <ColdDrinks />;
      case 'all':
      default:
        return <Home />;
    }
  };

  return (
    <div className="shop-page-container">
      <h2>Explore Our Products</h2>
      <p>Browse by category at Narayan Sahu General Store.</p>

      {/* Category Tabs or Sidebar */}
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Render selected category */}
      <div className="category-content">
        {renderCategoryComponent()}
      </div>
    </div>
  );
};

export default Shop;

import React from 'react';
import Products from './Product';
import Team from './Team';
import Grocery from './Grocery';
import Hardware from './Hardware';
import Farming from './Farming';
import Household from './Household';
import ColdDrinks from './ColdDrinks';
// import Contact from './Contact';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Narayan Sahu General Store And House!</h1>
      <p>Discover a wide range of products for all your needs, all in one place.</p>
      
      <div className="home-section-intro">
        <h2>Explore Our Categories</h2>
      </div>

      <section className="home-category-section">
        <h3>Our Products</h3>
        <Products />
      </section>

      <section className="home-category-section">
        {/* <h3>Groceries</h3> */}
        <Grocery />
      </section>

      <section className="home-category-section">
        <h3>Hardware Essentials</h3>
        <Hardware />
      </section>

      <section className="home-category-section">
        <h3>Farming Supplies</h3>
        <Farming />
      </section>

      <section className="home-category-section">
        <h3>Household Items</h3>
        <Household />
      </section>

      <section className="home-category-section">
        <h3>Cold Drinks Collection</h3>
        <ColdDrinks />
      </section>
      
      <section className="home-category-section">
        <h3>Meet Our Team</h3>
        <Team />
      </section>

    </div>
  );
};

export default Home;
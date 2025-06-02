import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import Shop from './components/Shop';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Cart from './components/Cart';

// Import Login and Signup components
import Login from './components/Login';
import Signup from './components/Signup';
import Household from './components/Household';

function App() {
  return (
    <Router>
      {/* Provide CartContext to all child components */}
      <CartProvider>
        <div
          style={{
            fontFamily: 'sans-serif',
            backgroundColor: '#f4f4f4',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navbar />

          

          <main style={{ padding: '20px', flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              {/* Routes for Login and Signup */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/household" element={<Household />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

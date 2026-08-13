import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer.jsx';
import Nav from './Components/Nav.jsx';
import Home from './Pages/Home.jsx';
import Books from './Pages/Books.jsx';
import { books } from './data.js';
import BookDetails from './Pages/BookDetails.jsx';
import Cart from './Pages/Cart.jsx';
import React, { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart((currentCart) => {
      const dupeItem = currentCart.find((item) => +item.id === +book.id);

      if (dupeItem) {
        return currentCart.map((item) =>
          +item.id === +book.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      return [...currentCart, { ...book, quantity: 1 }];
    });
  }

function changeQuantity(book, quantity) {
  setCart((currentCart) =>
    currentCart.map((item) =>
      +item.id === +book.id
        ? { ...item, quantity: quantity }
        : item
    )
  );
}

function removeItem(book) {
  setCart(cart.filter(item => book.id !== item.id))
}

  useEffect (() => {
    console.log(cart);
  }, [cart])

  return (
    <div className="App">
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookDetails books={books} cart={cart} changeQuantity={changeQuantity} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import AppContent from './components/app-content/AppContent';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Cart />
      <AppContent />
      <Footer />
    </>
  );
}

export default App;

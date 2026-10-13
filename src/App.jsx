import React from 'react';
import { useEffect, useState } from 'react';
import AboutUs from './components/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';
const currentPage = () => ['plants', 'cart'].includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'home';
export default function App() {
  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    const navigate = () => { setPage(currentPage()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  return <><Navbar page={page}/>{page === 'home' ? <main><section className="hero"><div className="hero-content"><span className="eyebrow">Welcome to Paradise Nursery</span><h1>Bring life<br/>to your space.</h1><p>Thoughtfully chosen plants.<br/>A little everyday paradise.</p><a className="button hero-button" href="#plants">Get Started <span aria-hidden="true">↗</span></a></div><span className="hero-note">Your next chapter starts with a leaf.</span></section><AboutUs/><section className="values"><span>18 plants to discover</span><span>3 thoughtfully curated collections</span><span>Endless room to grow</span></section></main> : page === 'plants' ? <ProductList/> : <CartItem/>}<footer><a href="#home">Paradise Nursery</a><span>A little green goes a long way.</span></footer></>;
}

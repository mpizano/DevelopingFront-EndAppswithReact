import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/CartSlice.jsx';
export default function Navbar({ page }) {
  const count = useSelector(selectCartCount);
  return <header className="navbar"><a href="#home" className="brand"><span className="brand-mark" aria-hidden="true">❧</span><span>Paradise <strong>Nursery</strong></span></a>
    <nav aria-label="Main navigation"><a href="#home" aria-current={page === 'home' ? 'page' : undefined}>Home</a><a href="#plants" aria-current={page === 'plants' ? 'page' : undefined}>Plants</a><a className="cart-link" href="#cart" aria-current={page === 'cart' ? 'page' : undefined} aria-label={`Cart, ${count} items`}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M2 3h3l3 13h12l2-9H6"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></svg><span>Cart</span><span className="badge" aria-live="polite">{count}</span></a></nav>
  </header>;
}

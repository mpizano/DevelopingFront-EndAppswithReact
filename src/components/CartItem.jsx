import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, selectCartItems, selectCartCount, selectCartTotal } from '../store/CartSlice.jsx';
import { money } from '../data/plants.js';
export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const [checkout, setCheckout] = useState(false);
  return <main className="container cart-page"><div className="page-heading"><span className="eyebrow">Your growing collection</span><h1>Shopping cart</h1><p>{count} {count === 1 ? 'plant' : 'plants'} ready for a new home.</p></div>
    {items.length === 0 ? <section className="empty-cart"><span aria-hidden="true">❧</span><h2>Your paradise starts with a plant.</h2><p>Explore the collection and find your first green companion.</p><a href="#plants" className="button">Continue Shopping</a></section> : <div className="cart-layout"><section className="cart-items" aria-label="Cart items">{items.map(item => <article className="cart-item" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-item-details"><span className="eyebrow">{item.category}</span><h2>{item.name}</h2><p>{money(item.price)} each</p><div className="item-controls"><div className="quantity"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button><span aria-live="polite">{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button></div><button className="delete" aria-label={`Delete ${item.name}`} onClick={() => dispatch(removeItem(item.id))}>Delete</button></div></div><strong className="line-total">{money(item.price * item.quantity)}</strong></article>)}</section><aside className="order-summary"><h2>Order summary</h2><div><span>Plants ({count})</span><span>{money(total)}</span></div><div className="summary-total"><strong>Total</strong><strong aria-live="polite">{money(total)}</strong></div><button className="button" onClick={() => setCheckout(true)}>Checkout →</button>{checkout && <p className="checkout-message" role="status">Coming Soon! Checkout is on its way. Keep growing your wishlist.</p>}<a className="continue" href="#plants">← Continue Shopping</a></aside></div>}
  </main>;
}

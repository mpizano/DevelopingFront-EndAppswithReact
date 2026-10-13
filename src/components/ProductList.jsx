import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from '../store/CartSlice.jsx';
import { categories, plants, money } from '../data/plants.js';
export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const [filter, setFilter] = useState('All plants');
  return <main className="catalog container"><div className="page-heading"><span className="eyebrow">Find your green companion</span><h1>Good things grow here.</h1><p>A plant for every corner, every routine, every home.</p></div>
    <div className="filters" aria-label="Plant categories">{['All plants', ...categories.map(c => c.name)].map(name => <button key={name} onClick={() => setFilter(name)} aria-pressed={filter === name} className={filter === name ? 'active' : ''}>{name}</button>)}</div>
    {categories.filter(c => filter === 'All plants' || filter === c.name).map(category => <section className="category" key={category.name}><div className="category-heading"><div><h2>{category.name}</h2><p>{category.description}</p></div><span>6 plants</span></div><div className="product-grid">{plants.filter(p => p.category === category.name).map(plant => {
      const added = items.some(item => item.id === plant.id);
      return <article className="plant-card" key={plant.id}><div className="plant-image"><img src={plant.image} alt={plant.name} loading="lazy" onError={e => { e.currentTarget.style.display = 'none'; }} /><span className="image-fallback" aria-hidden="true">❧</span></div><div className="plant-info"><div className="plant-title"><h3>{plant.name}</h3><strong>{money(plant.price)}</strong></div><p>{plant.description}</p><button className="button add-button" disabled={added} onClick={() => dispatch(addItem(plant))}>{added ? '✓ Added to cart' : '+ Add to Cart'}</button></div></article>;
    })}</div></section>)}
  </main>;
}

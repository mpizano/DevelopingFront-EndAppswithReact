import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { categories, plants } from '../src/data/plants.js';

const bundle = await build({ entryPoints: ['src/store/CartSlice.jsx'], bundle: true, write: false, format: 'esm', platform: 'browser' });
const { default: reducer, addItem, removeItem, updateQuantity, selectCartCount, selectCartTotal } = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const plant = plants[0];
test('catalog has three categories with six distinct plants each', () => {
  assert.equal(categories.length, 3);
  for (const category of categories) assert.equal(category.plants.length, 6);
  assert.equal(new Set(plants.map(p => p.id)).size, 18);
  assert.ok(plants.every(p => p.image && p.name && p.description && p.price > 0));
});
test('adding and changing quantities updates count, line totals and order total', () => {
  let cart = reducer(undefined, addItem(plant));
  cart = reducer(cart, addItem(plant));
  cart = reducer(cart, addItem(plants[1]));
  assert.equal(cart.items.length, 2);
  assert.equal(selectCartCount({ cart }), 3);
  assert.equal(selectCartTotal({ cart }), plant.price * 2 + plants[1].price);
  cart = reducer(cart, updateQuantity({ id: plant.id, quantity: 4 }));
  assert.equal(selectCartCount({ cart }), 5);
  assert.equal(selectCartTotal({ cart }), plant.price * 4 + plants[1].price);
  cart = reducer(cart, updateQuantity({ id: plant.id, quantity: 3 }));
  assert.equal(cart.items[0].quantity, 3);
});
test('decreasing to zero removes an item and delete empties the cart', () => {
  let cart = reducer(undefined, addItem(plant));
  cart = reducer(cart, addItem(plants[1]));
  cart = reducer(cart, updateQuantity({ id: plant.id, quantity: 0 }));
  assert.equal(cart.items.length, 1);
  cart = reducer(cart, removeItem(plants[1].id));
  assert.equal(selectCartCount({ cart }), 0);
  assert.equal(selectCartTotal({ cart }), 0);
});
test('invalid quantities and unknown items do not corrupt the cart', () => {
  const cart = reducer(undefined, addItem(plant));
  assert.deepEqual(reducer(cart, updateQuantity({ id: plant.id, quantity: 1.5 })), cart);
  assert.deepEqual(reducer(cart, updateQuantity({ id: 'missing', quantity: 2 })), cart);
});

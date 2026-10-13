import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, { payload }) {
      const item = state.items.find(item => item.id === payload.id);
      if (item) item.quantity += 1;
      else state.items.push({ ...payload, quantity: 1 });
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
    updateQuantity(state, { payload: { id, quantity } }) {
      const item = state.items.find(item => item.id === id);
      if (!item || !Number.isInteger(quantity)) return;
      if (quantity <= 0) state.items = state.items.filter(item => item.id !== id);
      else item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartCount = state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
export default cartSlice.reducer;

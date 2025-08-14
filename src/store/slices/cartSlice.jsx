import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  itemCount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
      state.itemCount++;
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        state.total -= state.items[index].price * state.items[index].quantity;
        state.itemCount -= state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && quantity > 0) {
        const difference = quantity - item.quantity;
        state.itemCount += difference;
        state.total += difference * item.price;
        item.quantity = quantity;
      }
    }
  }
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

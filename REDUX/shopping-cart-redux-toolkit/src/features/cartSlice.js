import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../cartItems';
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: false,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      //state.cartItems = []; // other states remain the same
      return { cartItems: [] };
      //return initialState;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const itemId = payload;
      state.cartItems.find((item) => item.id === itemId).amount += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      item.amount -= 1;
    },
    calculateTotals: (state) => {
      let total = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.amount;
        amount += item.amount;
      });
      state.total = total;
      state.amount = amount;
    },
  },
});

//console.log('cs', cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;

// createSlice takes an object of reducer functions, a slice name, and an initial state value and lets us auto-generate action types and action creators, based on the names of the reducer functions that we supply.
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../components/product-card';
import { AddressTypes } from '../../../interfaces/Interfaces';
import { CartSliceState } from '../../../interfaces/Interfaces';

const initialState: CartSliceState = {
  cartItems: [],
  shippingAddress: null,
};
// That's basic slice configuration, it contains name, initialState and reducers parameters.
export const cartSlice = createSlice({
  name: 'cart-items',
  initialState: initialState,

  reducers: {
    // action addToCart
    // CartSliceState: initial state of addToCart action
    // Product its the component
    addToCart: (state: CartSliceState, action: PayloadAction<Product>) => {
      const product = action.payload;
      // The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function.
      const exist = state.cartItems.find((item: any) => item._id === product._id);

      if (exist) {
        // The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
        // The following code takes an array(state.cartItems) of objects and creates a new array containing the newly reformatted objects.
        state.cartItems = state.cartItems.map((item: any) =>
          item._id === product._id ? { ...product, qty: item.qty + 1 } : item,
        );
      } else {
        state.cartItems = [...state.cartItems, { ...product, qty: 1 }];
      }
    },
    // action removeFromCart
    // CartSliceState: initial state of addToCart action
    removeFromCart: (state: CartSliceState, action: PayloadAction<Product>) => {
      const product = action.payload;
      // The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function.
      const exist = state.cartItems.find((item: any) => item._id === product._id);

      if (exist && exist.qty === 1) {
        // The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
        state.cartItems = state.cartItems.filter((item: any) => item._id !== product._id);
      } else {
        // The following code takes an array(state.cartItems) of objects and creates a new array containing the newly reformatted objects.
        state.cartItems = state.cartItems.map((item: any) =>
          item._id === product._id ? { ...product, qty: item.qty - 1 } : item,
        );
      }
    },
    // action saveAddress
    // CartSliceState: initial state of addToCart action
    saveAddress: (state: CartSliceState, action: PayloadAction<AddressTypes>) => {
      state.shippingAddress = action.payload;
    },
    // action reset
    // state: any: initial state of addToCart action
    reset: (state: any) => {
      state.cartItems = [];
      state.shippingAddress = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, saveAddress, reset } = cartSlice.actions;

export default cartSlice;

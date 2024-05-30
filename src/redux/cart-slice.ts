import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../ts/types';

interface InitialState {
  products: Item[];
  totalSum: number;
  numberOfProducts: number;
}

const initialState: InitialState = {
  products: [],
  totalSum: 0,
  numberOfProducts: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<Item>) {
      state.products.push(action.payload);

      state.totalSum = state.products.reduce(
        (value, currentValue) => value + currentValue.data.price.item.price,
        0
      );

      state.numberOfProducts = state.products.length;
    },

    removeProductFromCart(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (item) => item.data.detail.spuId !== action.payload
      );

      state.totalSum = state.products.reduce(
        (value, currentValue) => value + currentValue.data.price.item.price,
        0
      );

      state.numberOfProducts = state.products.length;
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;

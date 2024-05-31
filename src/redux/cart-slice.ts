import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CounterData, Item, Product } from '../ts/types';

interface InitialState {
  products: Product[];
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
      const isProduct = state.products.find(
        (item) => item.data.detail.spuId === action.payload.data.detail.spuId
      );

      if (isProduct) {
        state.products = state.products.map((item) =>
          item.data.detail.spuId === action.payload.data.detail.spuId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const product = {
          ...action.payload,
          quantity: 1,
        };
        state.products.push(product);
      }

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

    increase(state, action: PayloadAction<number>) {
      state.products = state.products.map((item) =>
        item.data.detail.spuId === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    },

    decrease(state, action: PayloadAction<number>) {
      state.products = state.products.map((item) => {
        if (item.data.detail.spuId === action.payload) {
          if (item.quantity === 1) return item;

          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
    },

    saveCounterValue(state, action: PayloadAction<CounterData>) {
      state.products = state.products.map((item) =>
        item.data.detail.spuId === action.payload.spuId
          ? {
              ...item,
              quantity: action.payload.value,
            }
          : item
      );
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increase,
  decrease,
  saveCounterValue,
} = cartSlice.actions;

export default cartSlice.reducer;

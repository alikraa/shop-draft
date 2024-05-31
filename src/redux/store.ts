import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import shopSlice from './shop-slice';

export const store = configureStore({
  reducer: {
    cartData: cartSlice,
    shopData: shopSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
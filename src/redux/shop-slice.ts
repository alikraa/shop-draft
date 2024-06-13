import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  searchValue: string;
  currentBrand: string;
}

const initialState: InitialState = {
  searchValue: '',
  currentBrand: '',
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setCurrentBrand(state, action: PayloadAction<string>) {
      state.currentBrand = action.payload;
    },
  },
});

export const { setSearchValue, setCurrentBrand } = shopSlice.actions;

export default shopSlice.reducer;

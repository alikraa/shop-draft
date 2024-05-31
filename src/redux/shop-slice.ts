import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  searchValue: string;
}

const initialState: InitialState = {
  searchValue: '',
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = shopSlice.actions;

export default shopSlice.reducer;

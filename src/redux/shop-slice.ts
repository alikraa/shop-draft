import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../ts/types';
import database from '../database.json';

interface InitialState {
  productList: Item[];
  searchValue: string;
  currentBrand: string;
}

const initialState: InitialState = {
  productList: database,
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

    sortingByBrand(state) {
      state.productList = state.currentBrand
        ? state.productList.filter(
            (item) =>
              item.data.brandRootInfo.brandItemList[0].brandName ===
              state.currentBrand
          )
        : database;
    },
  },
});

export const { setSearchValue, setCurrentBrand, sortingByBrand } =
  shopSlice.actions;

export default shopSlice.reducer;

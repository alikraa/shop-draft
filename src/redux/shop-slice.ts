import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../ts/types';
import database from '../database.json';

interface InitialState {
  productList: Item[];
  searchValue: string;
  currentBrand: string[];
}

const initialState: InitialState = {
  productList: database,
  searchValue: '',
  currentBrand: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setCurrentBrand(state, action: PayloadAction<string>) {
      if (state.currentBrand.includes(action.payload)) {
        state.currentBrand = state.currentBrand.filter(
          (item) => item !== action.payload
        );
      } else {
        state.currentBrand.push(action.payload);
      }
    },

    sortingByBrands(state) {
      const filteredList: Item[] = [];

      if (state.currentBrand.length > 0) {
        state.currentBrand.forEach((brand) =>
          filteredList.push(
            ...database.filter(
              (item) =>
                item.data.brandRootInfo.brandItemList[0].brandName === brand
            )
          )
        );

        state.productList = filteredList;
      } else {
        state.productList = database;
      }
    },
  },
});

export const { setSearchValue, setCurrentBrand, sortingByBrands } =
  shopSlice.actions;

export default shopSlice.reducer;

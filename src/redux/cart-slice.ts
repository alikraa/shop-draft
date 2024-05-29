import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {Item} from '../ts/types';

interface InitialState {
    products: Item[],
    totalSum: number,
    numberOfProducts: number
}

const initialState: InitialState = {
    products: [],
    totalSum: 0,
    numberOfProducts: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    }
})

export default cartSlice.reducer;
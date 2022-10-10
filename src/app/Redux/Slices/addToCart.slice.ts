import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { objAmount } from '../../Global/model';

const initialState:objAmount[] = []

const addToCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state:objAmount[],action:PayloadAction<objAmount>)=>{
            state.push(action.payload)
        }
    },
})

export const cart = initialState
export const { addToCart } = addToCartSlice.actions
export default addToCartSlice.reducer
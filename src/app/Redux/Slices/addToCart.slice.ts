import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { objAmount } from '../../../Views/Home/model';

const initialState:objAmount[] = []

const addToChartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        save:(state:objAmount[],action:PayloadAction<objAmount>)=>{
            state.push(action.payload)
        }
    },
})

export const cart = initialState
export const { save } = addToChartSlice.actions
export default addToChartSlice.reducer
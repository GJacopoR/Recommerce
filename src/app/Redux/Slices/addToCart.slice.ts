import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIobj } from '../../../Views/Home/model';

const initialState:APIobj[] = []

const addToChartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        save:(state:APIobj[],action:PayloadAction<APIobj>)=>{
            state.push(action.payload)
        }
    },
})

export const cart = initialState
export const { save } = addToChartSlice.actions
export default addToChartSlice.reducer
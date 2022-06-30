import {createSlice,} from '@reduxjs/toolkit'

const initState = {}

const defaultSlice = createSlice({
    name:'default',
    initialState:initState,
    reducers:{
        defaultAction:(state,action)=>{
            state = action.payload
        }
    }
})

export const {defaultAction} = defaultSlice.actions
export default defaultSlice.reducer


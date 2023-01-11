import { createSlice } from '@reduxjs/toolkit'
 
export const dataSlice = createSlice({
 name: 'buyCake',
 initialState: {
   value: 10,
 },
 reducers: {
   increment: (state) => {
     state.value += 1
   },
   decrement: (state) => {
     state.value -= 1
   },
 },
})
 
// Action creators are generated for each case reducer function
export const { increment, decrement } = dataSlice.actions
 
export default dataSlice.reducer

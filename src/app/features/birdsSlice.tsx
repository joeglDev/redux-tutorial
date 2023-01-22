import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface BirdsSlice {
name: string;
views: number;
}

// Define the initial state using that type
const initialState: BirdsSlice[] = [{
    name: 'robin',
    views: 0,
  }]

export const birdsSlice = createSlice({
    name: 'birds',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      
    },
  })
  
  //export const { } = birdsSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectBirds = (state: RootState) => state.birds
  
  export default birdsSlice.reducer
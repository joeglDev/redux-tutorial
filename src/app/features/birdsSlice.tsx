import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import type { PayloadAction } from '@reduxjs/toolkit'

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
    //hook actions = reducers
    reducers: {
        //reducer to add a new bird object
     addBird: (state : BirdsSlice[], action: PayloadAction<string>) => {
        return [
            ...state,
            {
              name: action.payload,
              views: 1
            }
          ];
     },
     //reducer to increment birds view value
     increaseViewByOne: (state: BirdsSlice[], action: PayloadAction<string>) => {
        const target = action.payload;
        //get specific object from array state
        const bird = state.find((b : BirdsSlice) => {return target === b.name});
      if (bird) {
        bird.views += 1;
      } 
     },
    },
  })
  
  //export reducer actions
  export const {addBird, increaseViewByOne} = birdsSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectBirds = (state: RootState) => state.birds
  
  export default birdsSlice.reducer
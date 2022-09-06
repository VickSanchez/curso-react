import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter';
import { marvelSlice } from './slices/marvel/marvelSlice';
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    heroes: marvelSlice.reducer,
  },
})
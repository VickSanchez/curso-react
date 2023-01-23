import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './apis';
import { breakingSlice, counterSlice } from './slices';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    breaking: breakingSlice.reducer,

    [todosApi.reducerPath] : todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( todosApi.middleware )
}) 
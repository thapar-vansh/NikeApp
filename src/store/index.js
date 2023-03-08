import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './productsSlice'

// store is the combination of reducers and state
export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
})

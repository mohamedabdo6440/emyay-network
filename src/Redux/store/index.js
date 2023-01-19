import { configureStore } from '@reduxjs/toolkit'
import Allproducts from './ProductsSlice'
import Allcarts from './CartSlice'

export const store = configureStore({
  reducer: {
    products: Allproducts,
    carts: Allcarts,
  },
})


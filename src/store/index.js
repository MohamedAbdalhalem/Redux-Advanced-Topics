import {configureStore} from '@reduxjs/toolkit'
import uiSlice from './uiSlice'
import cartSlice from './cartSlice'
const store = configureStore({
  reducer : {uiSlice : uiSlice , cartSlice : cartSlice }
})

export default store
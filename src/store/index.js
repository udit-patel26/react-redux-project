import { createStore,configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui-slice'
import cart from './cart'


const store = configureStore({
    reducer:{ui:uiSlice,cart:cart}
})

export default store;
import { configureStore } from '@reduxjs/toolkit';
import  cartReducer from '../features/cardSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,
       
    },
});

export default store;
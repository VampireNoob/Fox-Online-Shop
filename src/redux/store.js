import { configureStore } from "@reduxjs/toolkit";
import games from './gamesSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        games,
        cart
    }
})
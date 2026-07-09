import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },

    reducers: {
        addItemToCart: (state, action) => {
            const existingItem = state.cartItems.find(
                item => item.gameId === action.payload.game.id
            );
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
                existingItem.totalPrice = existingItem.quantity * action.payload.game.price;
            } else {
                state.cartItems.push({
                    id: new Date().getTime(),
                    gameId: action.payload.game.id,
                    quantity: action.payload.quantity,
                    totalPrice: action.payload.quantity * action.payload.game.price
                });
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}
export const getTotalArticles = state => {
    return state.cart.cartItems.length 
};
export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
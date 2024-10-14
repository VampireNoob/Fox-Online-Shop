import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        selectedCategory: 'Alles'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})

export const getSelectedCategory = state => state.games.selectedCategory;
export const { filterCategory } = gamesSlice.actions;
export default gamesSlice.reducer;
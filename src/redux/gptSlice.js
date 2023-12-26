import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptSearch: false,
        movieNames: null,
        gptMovies: null
    },
    reducers: {
        toggleGptSearch: (state, action) => {
            state.gptSearch = !state.gptSearch;
        },
        addGptMovies: (state, action) => {
            state.gptMovies = action.payload.gptMovies;
            state.movieNames = action.payload.movieNames;
        }
    }
});

export const { toggleGptSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
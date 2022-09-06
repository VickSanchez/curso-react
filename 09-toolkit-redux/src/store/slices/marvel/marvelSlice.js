import { createSlice } from '@reduxjs/toolkit';

export const marvelSlice = createSlice({
    name: 'marvel',
    initialState: {
        page: 0,
        heroes: [],
        isLoading: false,
    },
    reducers: {
        startLoadingHeroes: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setHeroes: ( state, action ) => {
            state.isLoading= false;
            state.page = action.payload.page;
            state.heroes = action.payload.heroes
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingHeroes, setHeroes } = marvelSlice.actions;
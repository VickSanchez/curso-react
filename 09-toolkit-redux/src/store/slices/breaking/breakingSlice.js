import { createSlice } from '@reduxjs/toolkit';

export const breakingSlice = createSlice({
    name: 'breaking',
    initialState: {
        page: 0,
        characters: [],
        isLoading: false,
    },
    reducers: {
        startLoadingCharacters: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setCharacters: ( state, action ) => {
            state.isLoading= false;
            state.page = action.payload.page;
            state.characters = action.payload.characters
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingCharacters, setCharacters } = breakingSlice.actions;
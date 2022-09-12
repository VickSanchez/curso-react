import { setCharacters, startLoadingCharacters } from "./breakingSlice"

export const getCharacter = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingCharacters() )

        const resp = await fetch(`https://www.breakingbadapi.com/api/characters?limit=10&offset=${ page * 10}`)
        const data = await resp.json();
        console.log(data);

        dispatch( setCharacters({ characters: data.results, page: page + 1 }))

    }
}
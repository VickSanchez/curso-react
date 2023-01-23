import { breakingApi } from "../../../api/breakingApi"
import { setCharacters, startLoadingCharacters } from "./breakingSlice"

export const getCharacter = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingCharacters() )

        //* Petición con Fetch
        // const resp = await fetch(`https://www.breakingbadapi.com/api/characters?limit=10&offset=${ page * 10}`)
        // const data = await resp.json();

        //* Petición con axios
        const {data} = await breakingApi.get(`/characters?limit=10&offset=${ page * 10}`)
        // console.log(data);

        dispatch( setCharacters({ characters: data, page: page + 1 }))

    }
}
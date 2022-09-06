import { setHeroes, startLoadingHeroes } from "./marvelSlice"

export const getHeroe = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingHeroes() )

        const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c0971809c89de407c76f6c415753a46c&hash=a2b00ef57ca2d9dd35f05b96fda32067&offset=${ page * 10}`)
        const data = await resp.json();
        console.log(data);

        dispatch( setHeroes({ heroes: data.results, page: page + 1 }))

    }
}
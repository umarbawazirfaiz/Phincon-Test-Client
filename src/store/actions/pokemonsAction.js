import {GET_POKEMONS, GET_MORE_POKEMONS, POKEMONS_ERROR} from './types'
import axios from 'axios'

export const getPokemons = (offset) => async dispatch => {  
    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
        dispatch( {
            type: GET_POKEMONS,
            payload: res.data.results
        })
    }
    catch(e){
        dispatch( {
            type: POKEMONS_ERROR,
            payload: console.log(e),
        })
    }
}

export const getMorePokemons = (offset) => async dispatch => {
    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
        dispatch( {
            type: GET_MORE_POKEMONS,
            payload: res.data.results
        })
    }
    catch(e){
        dispatch( {
            type: POKEMONS_ERROR,
            payload: console.log(e),
        })
    }
}
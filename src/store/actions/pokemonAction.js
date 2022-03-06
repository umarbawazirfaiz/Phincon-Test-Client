import {GET_POKEMON, POKEMON_ERROR} from './types'
import axios from 'axios'

export const getPokemon = (name) => async dispatch => {  
    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        dispatch( {
            type: GET_POKEMON,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: POKEMON_ERROR,
            payload: console.log(e),
        })
    }
}
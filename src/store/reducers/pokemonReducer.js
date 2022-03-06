import {GET_POKEMON} from '../actions/types'

const initialState = {
    pokemon: {
        name: "",
        weight: "",
        height: "",
        abilities: [],
        types: [],
        stats: [],
    },
    loading: true,
}

const pokemonReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload,
                loading: false,
            }
        default: return state
    }
}

export default pokemonReducer;
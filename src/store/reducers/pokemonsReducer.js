import {GET_POKEMONS, GET_MORE_POKEMONS} from '../actions/types'

const initialState = {
    pokemons: [],
    loading: true,
    offset: 0,
}

const pokemonsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                offset: 20
            }
        case GET_MORE_POKEMONS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload],
                loading: false,
                offset: state.offset + 20
            }
        default: return state
    }
}

export default pokemonsReducer;
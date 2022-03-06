import { combineReducers } from 'redux'
import pokemonsReducer from './pokemonsReducer'
import pokemonReducer from './pokemonReducer'
import myPokemonsReducer from './myPokemonReducer'

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer,
  myPokemons: myPokemonsReducer
})
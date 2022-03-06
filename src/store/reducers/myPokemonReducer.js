import {
  CATCH_POKEMON,
  FAILED_CATCH_POKEMON,
  RELEASE_POKEMON,
  FAILED_RELEASE_POKEMON,
  RENAME_POKEMON,
  GET_MY_POKEMON,
} from "../actions/types";

const initialState = {
  pokemons: [],
  pokemon: {
    name: "",
    nickname: "",
    weight: "",
    height: "",
    abilities: [],
    types: [],
    stats: [],
    rename: 0,
  },
  loading: true,
  failed: false,
};

function nextPokemonId(pokemons) {
  const maxId = pokemons.reduce(
    (maxId, pokemon) => Math.max(pokemon.id, maxId),
    -1
  );
  return maxId + 1;
}

const myPokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATCH_POKEMON:
      return {
        ...state,
        pokemons: [
          ...state.pokemons,
          {
            id: nextPokemonId(state.pokemons),
            name: action.payload.name,
            nickname: action.payload.name,
            weight: action.payload.weight,
            height: action.payload.height,
            abilities: action.payload.abilities,
            types: action.payload.types,
            stats: action.payload.stats,
            rename: 1,
          },
        ],
        loading: false,
        failed: false,
      };
    case FAILED_CATCH_POKEMON:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    case RELEASE_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.filter((object) => {
          return object.id !== action.payload;
        }),
        loading: false,
        failed: false,
      };
    case FAILED_RELEASE_POKEMON:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    case RENAME_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.map((object) => {
          if (object.id === action.payload.id) {
            return {
              ...object,
              nickname: action.payload.nickname,
              rename: action.payload.count,
            };
          }
          return object;
        }),
        loading: false,
      };
    case GET_MY_POKEMON:
      return {
        ...state,
        pokemon: state.pokemons.find((object) => {
            return object.id === parseFloat(action.payload);
        }),
        loading: false,
      };

    default:
      return state;
  }
};

export default myPokemonsReducer;

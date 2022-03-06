import {
  CATCH_POKEMON,
  FAILED_CATCH_POKEMON,
  POKEMON_ERROR,
  RELEASE_POKEMON,
  FAILED_RELEASE_POKEMON,
  RENAME_POKEMON,
  GET_MY_POKEMON
} from "./types";
import axios from "axios";

export const getMyPokemon = (id) => async (dispatch) => {
  try {
      dispatch({
        type: GET_MY_POKEMON,
        payload: id,
      });
  } catch (e) {
    dispatch({
      type: POKEMON_ERROR,
      payload: console.log(e),
    });
  }
}

export const catchPokemon = (name) => async (dispatch) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const catchPokemon = await axios.get(`http://localhost:8000/catch`);
    if (catchPokemon.data.data > 50) {
      dispatch({
        type: CATCH_POKEMON,
        payload: res.data,
      });
      return true;
    } else {
      dispatch({
        type: FAILED_CATCH_POKEMON,
      });
      return false;
    }
  } catch (e) {
    dispatch({
      type: POKEMON_ERROR,
      payload: console.log(e),
    });
  }
};

export const releasePokemon = (name) => async (dispatch) => {
  try {
    const releasePokemon = await axios.get(`http://localhost:8000/release`);
    if (checkPrimeNumber(releasePokemon.data.data)) {
      dispatch({
        type: RELEASE_POKEMON,
        payload: name,
      });
      return true;
    } else {
      dispatch({
        type: FAILED_RELEASE_POKEMON,
      });
      return false;
    }
  } catch (e) {
    dispatch({
      type: POKEMON_ERROR,
      payload: console.log(e),
    });
  }
};

export const renamePokemon = (pokemon) => async (dispatch) => {
    try {
        const renamePokemon = await axios.get(`http://localhost:8000/rename?count=${pokemon.rename}&name=${pokemon.name}`);
          dispatch({
            type: RENAME_POKEMON,
            payload: {
                id: pokemon.id,
                nickname: renamePokemon.data.data.nickname,
                count: renamePokemon.data.data.count
            },
          });
      } catch (e) {
        dispatch({
          type: POKEMON_ERROR,
          payload: console.log(e),
        });
      }
}

function checkPrimeNumber(number) {
  let isPrime = true;
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

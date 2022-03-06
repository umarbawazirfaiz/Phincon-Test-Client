import { connect } from 'react-redux'
import { catchPokemon } from '../store/actions/myPokemonAction';

import Swal from 'sweetalert2'

const PokemonDetail = (props) => {
  const { pokemon } = props;

  const catchPokemon = async (name) => {
    const pokemon = await props.catchPokemon(name);
    if (pokemon) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Success catch pokemon!',
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed catch pokemon!',
      })
    }
  }

  return (
    <div className="pokemon-detail">
      <div className="overview">
        <div className="image">
          <img className="active" src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt={pokemon.name} />
        </div>
        {pokemon.nickname ? '' :<button className='btn' onClick={() => catchPokemon(pokemon.name)}><span>Catch Pokemon</span></button>} 
      </div>
      <div className="info">
        <h2>{pokemon.nickname ? pokemon.nickname : pokemon.name}</h2>
        <div className="box"> 
            <div className="left">
              {
                pokemon.nickname ? 
                <div className="row flex flex-flow-column">
                <span className="title">Real Name</span>
                <span className="value">
                  {pokemon.name}
                </span>
                </div>
                : ''
              }
              <div className="row flex flex-flow-column">
                <span className="title">Height</span>
                <span className="value">
                  {pokemon.height}
                </span>
              </div>
              <div className="row flex flex-flow-column">
                <span className="title">Weight</span>
                <span className="value">
                  {pokemon.weight}
                </span>
              </div>
              <div className="row flex flex-flow-column">
                <span className="title">Abilities</span>
                <span className="value">
                  <ul>
                    {pokemon.abilities.map((item) => (
                      <li key={item.ability.name}>
                        {item.ability.name}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <h3>Types</h3>
          <ul className="attribute">
            {pokemon.types.map((item) => (
              <li key={`attribute-${item.type.name}`} className={item.type.name.toLowerCase()}>
                <span>{item.type.name}</span>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({myPokemons:state.myPokemons})

export default connect(mapStateToProps, {catchPokemon})(PokemonDetail)

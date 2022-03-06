import { connect } from "react-redux";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { releasePokemon, renamePokemon } from "../store/actions/myPokemonAction";
import Swal from "sweetalert2";

class PokemonCard extends Component {
  releasePokemon = async (id) => {
    const releasePokemon = await this.props.releasePokemon(id);
    if (releasePokemon) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Success release pokemon!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed release pokemon!",
      });
    }
  };

  renamePokemon = (pokemon) => {
    this.props.renamePokemon(pokemon);
  };

  render() {
    const { pokemon, owned } = this.props;

    return (
      <div>
        <div className="pokemon-container">
          <Link to={owned ? `/my-pokemon/${pokemon.id}` : `/pokemon/${pokemon.name}`} className="">
            <div className="pokemon-image">
              <img
                src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                alt=""
              />
            </div>
            <div className="pokemon-name">
              {owned ? pokemon.nickname : pokemon.name}
            </div>
          </Link>
        </div>
        {owned ? (
          <div className="flex button-group">
            <button
              className="btn" style={{ flex: "1", margin: "0 10px", fontSize: '16px' }}
              onClick={() => this.renamePokemon(pokemon)}
            >
              Rename
            </button>
            <button
              className="btn" style={{ flex: "1", margin: "0 10px", fontSize: '16px'  }}
              onClick={() => this.releasePokemon(pokemon.id)}
            >
              Realese
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ myPokemons: state.myPokemons });

export default connect(mapStateToProps, { releasePokemon, renamePokemon })(PokemonCard);

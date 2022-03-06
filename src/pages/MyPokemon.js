import { connect } from "react-redux"
import PokemonCard from "../components/PokemonCard";

const MyPokemon = (props) => {

    const { pokemons } = props.myPokemons;

    return (
        <div className="container">
            <h3>My List Pokemon</h3>
            <div className="pokemon-list">{
                pokemons.map((pokemon, index)=><PokemonCard key={pokemon.name} id={index+1} pokemon={pokemon} owned={true} />)
            }</div>
        </div>
    )
}

const mapStateToProps = (state) => ({myPokemons: state.myPokemons})
export default connect(mapStateToProps)(MyPokemon)
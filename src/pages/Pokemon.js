import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { getPokemon } from '../store/actions/pokemonAction'
import PokemonDetail from "../components/PokemonDetail";

const Pokemon = (props) => {
    const { name } = useParams();

    useEffect(() => {
        fetchData();
    }, [name])

    const fetchData = async () => {
        await props.getPokemon(name);
    }

    const { pokemon } = props.pokemon;

    return(
        <div className="container">
            <PokemonDetail pokemon={pokemon}/>
        </div>
    )
};

const mapStateToProps = (state) => ({pokemon:state.pokemon})

export default connect(mapStateToProps, {getPokemon})(Pokemon)
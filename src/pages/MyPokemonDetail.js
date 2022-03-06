import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";
import { getMyPokemon } from '../store/actions/myPokemonAction'
import PokemonDetail from "../components/PokemonDetail";

const MyPokemonDetail = (props) => {
    const { id } = useParams();

    useEffect(() => {
        fetchData();
    }, [id])

    const fetchData = async () => {
        await props.getMyPokemon(id);
    }

    const { pokemon } = props.myPokemons;

    return(
        <div className="container">
            <PokemonDetail pokemon={pokemon}/>
        </div>
    )
};

const mapStateToProps = (state) => ({myPokemons:state.myPokemons})

export default connect(mapStateToProps, {getMyPokemon})(MyPokemonDetail)
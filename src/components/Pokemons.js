import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPokemons, getMorePokemons } from '../store/actions/pokemonsAction'
import PokemonCard from './PokemonCard';
import InfiniteScroll from "react-infinite-scroll-component";

class Pokemons extends Component {
    componentDidMount(){
        this.props.getPokemons(0);
    }

    fetchMoreData = async () => {
        const { offset } = this.props.pokemons;

        setTimeout(async () => {
            await this.props.getMorePokemons(offset);
        }, 2500);
    };

    render() {
        const { pokemons } = this.props.pokemons;
        return (
            <InfiniteScroll
                dataLength={pokemons.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading</h4>}
                >
                <div className="pokemon-list">{
                    pokemons.map((pokemon, index)=><PokemonCard key={pokemon.name} id={index+1} pokemon={pokemon}/>)
                }</div>
            </InfiniteScroll>
        )
    }
}

const mapStateToProps = (state) => ({pokemons:state.pokemons})

export default connect(mapStateToProps, {getPokemons, getMorePokemons})(Pokemons)
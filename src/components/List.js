import React, { Component } from "react";
import { forceCheck } from "react-lazyload";
import { Grid } from "@material-ui/core";

import Header from "./Header";
import PokemonCard from "./PokemonCard";

import data from "../data/pokemon.json";

class List extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filter: "",
    };

    this.filterData = this.filterData.bind(this);
    this.filterChange = this.filterChange.bind(this);
    
  }

  filterChange(a) {
    this.setState({
      searchTerm: a.target.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      forceCheck();
    }
  }

  filterData(data) {
    const searchTerm = this.state.searchTerm;

    return data.filter((pokemon) => {
      const { name } = pokemon;

      return name[0].toLowerCase().includes(searchTerm);
    });
  }

  render() {
    const pokemon = this.filterData(data);
        return (
      <div>
        <Header isHome={true} filterChange={this.filterChange} />
        <Grid container spacing={2}>
          {pokemon.map((item, index) => 
          PokemonCard(item, index))}
        </Grid>
      </div>
    );
  }
}

export default List;

import React, { Component } from "react";
import { connect } from "react-redux";
import { movieDetailRequested } from "../actions";
import { MoviesList } from './MoviesList';

class FavoriteMoviesBase extends Component {
  render() {
    return (
      <MoviesList
        moviesList={this.props.moviesList}
        movieDetailRequested={this.props.movieDetailRequested}/>
    );
  }
}

const mapStateToProps = (state) => {
  return { moviesList: state.favoriteMovies }
  };

const mapDispatchToProps = {
  movieDetailRequested,
};
export const FavoriteMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteMoviesBase);


import React, { Component } from "react";
import { connect } from "react-redux";
import { movieDetailClicked } from "./actions";
import { MoviesList } from './MoviesList';

class FavoriteMoviesBase extends Component {
  render() {
    return (
      <MoviesList
        moviesList={this.props.moviesList}
        movieDetailClicked={this.props.movieDetailClicked}/>
    );
  }
}

const mapStateToProps = (state) => {
  return { moviesList: state.favoriteMovies }
  };

const mapDispatchToProps = {
  movieDetailClicked,
};
export const FavoriteMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteMoviesBase);


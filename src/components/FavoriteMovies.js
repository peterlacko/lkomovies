import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MoviesList } from './MoviesList';

class FavoriteMoviesBase extends Component {
  render() {
    return <MoviesList moviesList={this.props.moviesList} />;
  }
}

const mapStateToProps = (state) => {
  return { moviesList: state.favoriteMovies };
};

export const FavoriteMovies = connect(
  mapStateToProps,
  null
)(FavoriteMoviesBase);

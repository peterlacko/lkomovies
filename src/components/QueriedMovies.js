import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MoviesList } from './MoviesList';

class QueriedMoviesBase extends Component {
  render() {
    return <MoviesList moviesList={this.props.moviesList} />;
  }
}

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
});

export const QueriedMovies = connect(mapStateToProps, null)(QueriedMoviesBase);

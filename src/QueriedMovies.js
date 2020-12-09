import React, { Component } from "react";
import { connect } from "react-redux";
import { movieDetailRequested } from "./actions";
import { MoviesList } from './MoviesList';

class QueriedMoviesBase extends Component {
  render() {
    return (
      <MoviesList
        moviesList={this.props.moviesList}
        movieDetailRequested={this.props.movieDetailRequested}/>
    );
  }
}

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
});

const mapDispatchToProps = {
  movieDetailRequested,
};
export const QueriedMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(QueriedMoviesBase);

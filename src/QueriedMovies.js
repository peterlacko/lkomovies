import React, { Component } from "react";
import { connect } from "react-redux";
import { movieDetailClicked } from "./actions";
import { MoviesList } from './MoviesList';

class QueriedMoviesBase extends Component {
  render() {
    return (
      <MoviesList
        moviesList={this.props.moviesList}
        movieDetailClicked={this.props.movieDetailClicked}/>
    );
  }
}

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
});

const mapDispatchToProps = {
  movieDetailClicked,
};
export const QueriedMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(QueriedMoviesBase);

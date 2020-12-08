import React, { Component } from "react";
import { connect } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { isMovieFavorite } from "./reducers";
import { removeFavorite, addFavorite } from "./actions";

class MovieDetailBase extends Component {
  render() {
    const movie = this.props.selectedMovie || {};
    const isFavorite = this.props.isFavorite;
    return (
      <div>
        <div>Name: {movie.Title}</div>
        {isFavorite ? (
          <AiFillStar onClick={() => this.props.removeFavorite(movie)} />
        ) : (
          <AiOutlineStar onClick={() => this.props.addFavorite(movie)} />
        )}
        <div>Year: {movie.Year}</div>
        <div>Type: {movie.Type}</div>
        <img src={movie.Poster}></img>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
  isFavorite: isMovieFavorite(state.favoriteMovies, state.selectedMovie),
});

const mapDispatchToProps = {
  removeFavorite,
  addFavorite,
};

export const MovieDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetailBase);

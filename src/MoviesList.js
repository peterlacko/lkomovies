import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { movieDetailClicked } from "./actions";

class MoviesListBase extends Component {
  constructor(props) {
    super(props);
    this.handleDetailClicked = this.handleDetailClicked.bind(this);
  }

  handleDetailClicked(movie) {
    this.props.movieDetailClicked(movie);
  }

  render() {
    return (
      <div>
        {this.props.moviesList.map((movie, index) => {
          return (
            <Link
              key={index}
              to={"/detail"}
              onClick={() => this.handleDetailClicked(movie)}
            >
              <div>{movie.Title}</div>
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
});

const mapDispatchToProps = {
  movieDetailClicked,
};
export const MoviesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListBase);

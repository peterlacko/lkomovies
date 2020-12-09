import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class MoviesList extends Component {
  render() {
    return (
      <div>
        {this.props.moviesList.map((movie, index) => {
          return (
            <Link
              key={index}
              to={`/detail/${movie.imdbID}`}
              onClick={() => this.props.movieDetailRequested(movie)}
            >
              <div>{movie.Title}</div>
            </Link>
          );
        })}
      </div>
    );
  }
}
import React from 'react';
import { connect } from 'react-redux';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { isMovieFavorite } from './reducers';
import { removeFavorite, addFavorite } from './actions';

const useStyles = makeStyles({
    root: {
        marginTop: '56px'
    },
    paper: {
        maxWidth: 800,
        padding: '10px 10px 10px 10px'
    },
    title: {
        fontWeight: 'bold'
    },
    img: {
        width: 200,
        height: 'auto'
    },
    gridContainer: {
        gridTemplateColumns: '60% 40%',
        gridTemplateRows: '70% 30%'
    },
    movieInfo: {
        gridColumn: '1/2',
        gridRow: '1/2',
        width: '60%',
        padding: '5px 5px 5px 5px'
    },
    moviePoster: {
        gridColumn: '2/3',
        gridRow: '1/2',
        padding: '5px 5px 5px 5px'
    },
    moviePlot: {
        gridColumn: '1/3',
        gridRow: '2/3',
        padding: '5px 5px 5px 5px'
    }
});

function MovieDetailBase(props) {
  const movie = props.selectedMovie || {};
  const isFavorite = props.isFavorite;
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <Grid container className={styles.gridContainer}>
          <Grid item className={styles.movieInfo}>
            <div className={styles.title}>{movie.Title}&nbsp;&nbsp;
            {isFavorite ? (
              <AiFillStar onClick={() => props.removeFavorite(movie)} />
            ) : (
              <AiOutlineStar onClick={() => props.addFavorite(movie)} />
            )}</div>
            <div>Year: {movie.Year}</div>
            <div>Type: {movie.Type}</div>
            <div>Genre: {movie.Genre}</div>
            <div>Country: {movie.Country}</div>
            <div>Rating: {movie.Rating}</div>
            <div>Actors: {movie.Actors}</div>
          </Grid>
          <Grid item className={styles.moviePoster}>
            <img alt='poster' className={styles.img} src={movie.Poster}></img>
          </Grid>
          <Grid item className={styles.moviePlot}>
            <div>{movie.Plot}</div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
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

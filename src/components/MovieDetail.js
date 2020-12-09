import React from 'react';
import { connect } from 'react-redux';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
  Paper,
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { isMovieFavorite } from '../reducers';
import { removeFavorite, addFavorite } from '../actions';

const useStyles = makeStyles({
  root: {
    marginTop: '56px',
  },
  paper: {
    maxWidth: 800,
    padding: '16px 10px 16px 10px',
    marginTop: '10px',
    marginBottom: '10px'
  },
  title: {
    fontWeight: 'bold',
  },
  gridContainer: {
    gridTemplateColumns: '60% 40%',
    gridTemplateRows: '70% 30%',
  },
  tableCell: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  movieInfo: {
    gridColumn: '1/2',
    gridRow: '1/2',
    width: '60%',
    padding: '5px 5px 5px 5px',
  },
  moviePoster: {
    gridColumn: '2/3',
    gridRow: '1/2',
    padding: '5px 5px 5px 5px',
  },
  moviePlot: {
    gridColumn: '1/3',
    gridRow: '2/3',
    padding: '5px 5px 5px 5px',
  },
  plot: {
    paddingTop: '16px',
    paddingLeft: '16px'
  }
});

function MovieDetailBase(props) {
  const movie = props.selectedMovie || {};
  const isFavorite = props.isFavorite;
  const styles = useStyles();
  const movieItems = [
    ['Year', 'Year'],
    ['Country', 'Country'],
    ['Director', 'Director'],
    ['Runtime', 'Runtime'],
    ['Genre', 'Genre'],
    ['Release Date', 'Released'],
    ['Rating', 'imdbRating'],
    ['Actors', 'Actors'],
  ];
  return (
    <div className={styles.root}>
      <Paper className={styles.paper}>
        <Grid container className={styles.gridContainer}>
          <Grid item className={styles.movieInfo}>
            <Table>
              <TableBody>
                <TableRow key={100}>
                  <TableCell align='left' className={styles.tableCell}>
                    <Typography variant='h5'>
                      {movie.Title}&nbsp;&nbsp;
                    </Typography>
                  </TableCell>
                  <TableCell align='left' className={styles.tableCell}>
                    <Typography variant='h5'>
                    {isFavorite ? (
                      <AiFillStar onClick={() => props.removeFavorite(movie)} />
                    ) : (
                      <AiOutlineStar onClick={() => props.addFavorite(movie)} />
                    )}
                    </Typography>
                  </TableCell>
                </TableRow>
                {movieItems.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell align='left' className={styles.tableCell}>
                        <Typography fontWeight='fontWeightBold'>
                          {item[0]}
                        </Typography>
                      </TableCell>
                      <TableCell align='left' className={styles.tableCell}>
                        {movie[item[1]]}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Grid>
          <Grid item className={styles.moviePoster}>
            <img alt='poster' className={styles.img} src={movie.Poster}></img>
          </Grid>
          <Grid item className={styles.moviePlot}>
            <Typography variant='body1' className={styles.plot}>{movie.Plot}</Typography>
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

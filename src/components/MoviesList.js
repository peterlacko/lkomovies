import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        overflowY: 'auto'
    },
    listText: {
        textDecoration: 'none',
        color: 'black',
        '&:visited': {
            color: 'black'
        }
    },
    listItem: {
        '&:hover': {
            borderRadius: '10px',
            backgroundColor: '#d7dbf1'
        }
    }
});

export function MoviesList(props) {
  const styles = useStyles();

  return (
    <List className={styles.list}>
      {props.moviesList.map((movie, index) => {
        return (
          <ListItem className={styles.listItem} key={index}>
            <Link
              key={index}
              className={styles.listText}
              to={`/detail/${movie.imdbID}`}
              onClick={() => props.movieDetailRequested(movie)}
            >
              <ListItemText >{movie.Title}</ListItemText>
            </Link>
        </ListItem>
        );
      })}
    </List>
  );
}

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FavoriteMovies } from './FavoriteMovies';
import { SearchForm } from './SearchForm';
import { QueriedMovies } from './QueriedMovies';
import { MovieDetail } from './MovieDetail';
import { AppBar, Toolbar, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appHeader: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)'
  },

  topLink: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
    '&:hover': {
      textDecoration: 'none'
    }
  },

  topNav: {
      display: 'flex',
      justifyContent: 'center'
  },

  movieSearch: {
    paddingTop: '80px'
  }
});

function App() {
  const styles = useStyles();
  return (
    <div className='App'>
      <header className={styles.appHeader}>
        <Router>
            <AppBar title='My App'>
              <Toolbar className={styles.topNav}>
                <Link className={styles.topLink} href='/' component={Button}>
                  Home
                </Link>
                <Link className={styles.topLink} href='/favorites' component={Button}>
                  Favorites
                </Link>
              </Toolbar>
            </AppBar>
            <Switch>
              <Route exact path='/'>
                <div className={styles.movieSearch}>
                  <SearchForm />
                  <QueriedMovies />
                </div>
              </Route>
              <Route path='/favorites'>
                <FavoriteMovies />
              </Route>
              <Route path='/detail/:id'>
                <MovieDetail />
              </Route>
            </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

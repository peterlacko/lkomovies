import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { FavoriteMovies } from './FavoritesMovies';
import { SearchForm } from './SearchForm';
import { QueriedMovies } from './QueriedMovies';
import { MovieDetail } from './MovieDetail';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <Router>
          <span>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/favorites">Favorites</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path='/'>
                <SearchForm />
                <QueriedMovies />
              </Route>
              <Route path='/favorites'>
                <FavoriteMovies />
              </Route>
              <Route path='/detail'>
                  <MovieDetail />
              </Route>
            </Switch>
          </span>
        </Router>
      </header>
    </div>

  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Favorites from './Favorites';
import { SearchForm } from './SearchForm';
import { MoviesList } from './MoviesList';
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
                <MoviesList />
              </Route>
              <Route path='/favorites'>
                <Favorites />
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

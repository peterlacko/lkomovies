import React from 'react';
import './App.css';
import { SearchForm } from './SearchForm';
import { MoviesList } from './MoviesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
        <MoviesList />
      </header>
    </div>
  );
}

export default App;

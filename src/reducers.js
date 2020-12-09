function getFavoritesFromLocalStore() {
  try {
    const serialisedMovies = localStorage.getItem('favoriteMovies');
    return serialisedMovies ? JSON.parse(serialisedMovies) : [];
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const getInitialState = () => ({
    moviesList: [],
    selectedMovie: {},
    favoriteMovies: getFavoritesFromLocalStore(),
    loading: false
  }
) 

export const isMovieFavorite = (favoriteMovies, movie) => {
    const match = favoriteMovies.filter(m => m.imdbID === movie.imdbID);
    return match && match.length;
}


function getMoviesFromResponse(response) {
  return response.Search ? response.Search : [];
}

function saveLocalFavorites(favoriteMovies) {
  try {
    const serialisedMovies = JSON.stringify(favoriteMovies);
    localStorage.setItem('favoriteMovies', serialisedMovies);
  } catch (e) {
    console.warn(e);
  }

}

function addFavorite(favoriteMovies, movie) {
  if (isMovieFavorite(favoriteMovies, movie)) {
    return favoriteMovies;
  }

  const newFavorites = favoriteMovies.slice();
  newFavorites.push(movie);
  saveLocalFavorites(newFavorites);
  return newFavorites;
}

function removeFavorite(favoriteMovies, movie) {
  const newFavorites = favoriteMovies.filter(m => m.imdbID !== movie.imdbID);
  saveLocalFavorites(newFavorites);
  return newFavorites;
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return { ...state, loading: true };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        moviesList: getMoviesFromResponse(action.payload),
        loading: false
      }
    // case 'MOVIE_DETAIL_CLICKED':
    //  return { ...state, selectedMovie: action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favoriteMovies: addFavorite(state.favoriteMovies, action.payload)};
    case 'REMOVE_FAVORITE':
      return { ...state, favoriteMovies: removeFavorite(state.favoriteMovies, action.payload)};
    case 'FETCH_MOVIE_DETAIL_SUCCESS':
      return { ...state, selectedMovie: action.payload };

    default:
      return state;
  }
};

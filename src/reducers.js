// TODO: move to separate file

function getFavoritesFromLocalStore() {
  try {
    const serialisedState = localStorage.getItem('favoriteMovies');
    return serialisedState ? JSON.parse(serialisedState) : [];
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

function addFavorite(favoriteMovies, movie) {
  if (isMovieFavorite(favoriteMovies, movie)) {
    return favoriteMovies;
  }

  const newArr = favoriteMovies.slice();
  newArr.push(movie);
  return newArr;
}

function removeFavorite(favoriteMovies, movie) {
  return favoriteMovies.filter(m => m.imdbID !== movie.imdbID);
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return { ...state, loading: true };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        moviesList: getMoviesFromResponse(action.json),
        loading: false
      }
    case 'MOVIE_DETAIL_CLICKED':
      return { ...state, selectedMovie: action.payload }
    case 'ADD_FAVORITE':
      return { ...state, favoriteMovies: addFavorite(state.favoriteMovies, action.payload)}
    case 'REMOVE_FAVORITE':
      return { ...state, favoriteMovies: removeFavorite(state.favoriteMovies, action.payload)}
    default:
      return state;
  }
};

export const fetchMovies = (payload) => ({
  type: 'FETCH_MOVIES',
  payload,
});

export const movieDetailRequested = (movie) => ({
  type: 'MOVIE_DETAIL_REQUESTED',
  payload: movie,
});

export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  payload: movie,
});

export const removeFavorite = (movie) => ({
  type: 'REMOVE_FAVORITE',
  payload: movie,
});

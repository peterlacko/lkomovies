export const fetchMovies = (payload) => ({
  type: 'FETCH_MOVIES',
  payload,
});

export const movieDetailRequested = (movieId) => ({
  type: 'MOVIE_DETAIL_REQUESTED',
  payload: movieId,
});

export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  payload: movie,
});

export const removeFavorite = (movie) => ({
  type: 'REMOVE_FAVORITE',
  payload: movie,
});

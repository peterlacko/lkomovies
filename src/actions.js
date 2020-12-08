export const fetchMovies = (payload) => ({
  type: "FETCH_MOVIES",
  payload,
});

export const movieDetailClicked = (movie) => ({
  type: "MOVIE_DETAIL_CLICKED",
  payload: movie,
});

export const addFavorite = (movie) => ({
  type: "ADD_FAVORITE",
  payload: movie,
});

export const removeFavorite = (movie) => ({
  type: "REMOVE_FAVORITE",
  payload: movie,
});

import { call, put, takeLatest } from 'redux-saga/effects';

const apiKey = '7c83e308'; // TODO: get from package.json or something similar

async function fetchMoviesCall(keyword) {
  const apiRequest = `http://omdbapi.com/?apikey=${apiKey}&s=${keyword}`;
  return await fetch(apiRequest).then((response) => response.json());
}

async function fetchMovie(movieId) {
  const apiRequest = `http://omdbapi.com/?apikey=${apiKey}&i=${movieId}`;
  return await fetch(apiRequest).then((response) => response.json());
}

function* fetchMovies(action) {
  try {
    const { keyword } = action.payload;
    const moviesList = yield call(fetchMoviesCall, keyword);
    yield put({ type: 'FETCH_MOVIES_SUCCESS', payload: moviesList });
  } catch (e) {
    yield put({ type: 'FETCH_MOVIES_FAILURE', message: e.message });
  }
}

function* getMovieDetail(action) {
  try {
    const movieId = action.payload.imdbID;
    const movieDetail = yield call(fetchMovie, movieId);
    yield put({ type: 'FETCH_MOVIE_DETAIL_SUCCESS', payload: movieDetail });
  } catch (e) {
    yield put({ type: 'FETCH_MOVIE_FAILURE', message: e.message });
  }
}

function* rootSaga() {
  yield takeLatest('FETCH_MOVIES', fetchMovies);
  yield takeLatest('MOVIE_DETAIL_REQUESTED', getMovieDetail);
}

export default rootSaga;

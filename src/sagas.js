import { call, put, takeLatest } from 'redux-saga/effects'

async function fetchMoviesCall(keyword) {
    const apiKey = '7c83e308';
    const apiRequest = `http://omdbapi.com/?apikey=${apiKey}&s=${keyword}`;
    return await fetch(apiRequest).then(response => response.json());
}

function* fetchMovies(action) {
    try {
        const { keyword } = action.payload;
        const moviesList = yield call(fetchMoviesCall, keyword);
        yield put({ type: "FETCH_MOVIES_SUCCESS", json: moviesList });
    } catch (e) {
        yield put({ type: "FETCH_MOVIES_FAILURE", message: e.message });
    }
}

function* rootSaga() {
    yield takeLatest("FETCH_MOVIES", fetchMovies);
}

export default rootSaga;
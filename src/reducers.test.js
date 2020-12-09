import { reducer } from './reducers';

describe('FETCH_MOVIES_SUCCESS', () => {
  test('that FETCH_MOVIES_SUCCESS enriches state', () => {
    const action = {
      type: 'FETCH_MOVIES_SUCCESS',
      payload: {
        Search: 'movie',
      },
    };
    expect(reducer({}, action)).toEqual({ moviesList: 'movie' });
  });

  test('that FETCH_MOVIES_SUCCESS enriches state with empty list', () => {
    const action = {
      type: 'FETCH_MOVIES_SUCCESS',
      payload: {
        xearch: 'movie',
      },
    };
    expect(reducer({}, action)).toEqual({ moviesList: [] });
  });
});

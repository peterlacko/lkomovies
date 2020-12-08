const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return { ...state, loading: true };
    case 'FETCH_MOVIES_SUCCESS':
      return { ...state, movies: action.json, loading: false }
    default:
      return state;
  }
};

export default reducer;
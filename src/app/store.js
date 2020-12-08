import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import apiReducer from '../apiReducer';

export default configureStore({
  reducer: {
    //counter: counterReducer,
    apiReducer
  },
});

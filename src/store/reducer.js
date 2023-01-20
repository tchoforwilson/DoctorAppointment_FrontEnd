import { combineReducers } from '@reduxjs/toolkit';
import appointmentsReducer from './appointments';

export default combineReducers({
  appointments: appointmentsReducer,
});

import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './apiCall';

const slice = createSlice({
  name: 'appointments',
  initialState: {
    list: [],
    feature: {
      missed: null,
      rescheduled: null,
      passed: null,
    },
    loading: false,
  },
  reducers: {
    APPOINTMENTS_REQUESTED: (appointments) => {
      appointments.loading = true;
    },
    APPOINTMENTS_RECEIVED: (appointments, action) => {
      appointments.list = action.payload;
      appointments.loading = false;
    },
    APPOINTMENTS_REQUEST_FAILED: (appointments) => {
      appointments.loading = false;
    },
    APPOINTMENTS_ADDED: (appointments, action) => {
      appointments.list.push(action.payload);
    },
  },
});

const {
  APPOINTMENTS_ADDED,
  APPOINTMENTS_REQUESTED,
  APPOINTMENTS_RECEIVED,
  APPOINTMENTS_REQUEST_FAILED,
} = slice.actions;

// Action Creators
const url = '/records';

export const getAllAppointments = () => (dispatch) => {
  dispatch(
    apiCallBegan({
      url,
      onStart: APPOINTMENTS_REQUESTED.type,
      onSuccess: APPOINTMENTS_RECEIVED.type,
      onError: APPOINTMENTS_REQUEST_FAILED.type,
    })
  );
};

export const addNewAppointment = (appointment) => {
  apiCallBegan({
    url,
    method: 'post',
    data: appointment,
    onSuccess: APPOINTMENTS_ADDED.type,
  });
};

export default slice.reducer;

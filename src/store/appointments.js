import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './apiCall';
import { API_ENDPOINT } from '../config/AppPath';

const slice = createSlice({
  name: 'appointments',
  initialState: {
    list: [],
    count: 0,
    statistic: {
      missed: 0,
      passed: 0,
      reschedule: 0,
    },
    loading: false,
    feedback: { type: '', message: '' },
  },
  reducers: {
    APPOINTMENTS_REQUESTED: (appointments) => {
      appointments.loading = true;
    },
    APPOINTMENTS_RECEIVED: (appointments, action) => {
      appointments.list = action.payload.data;
      appointments.loading = false;
    },
    APPOINTMENTS_REQUEST_FAILED: (appointments, action) => {
      appointments.loading = false;
      appointments.feedback.type = 'danger'; // since it is an error
      appointments.feedback.message = action.payload;
    },
    APPOINTMENTS_COUNT: (appointments, action) => {
      appointments.count = action.payload.data;
    },
    APPOINTMENTS_MISSED: (appointments, action) => {
      appointments.statistic.missed = action.payload.data;
    },
    APPOINTMENTS_PASSED: (appointments, action) => {
      appointments.statistic.passed = action.payload.data;
    },
    APPOINTMENTS_RESCHEDULE: (appointments, action) => {
      appointments.statistic.reschedule = action.payload.data;
    },
    APPOINTMENTS_ADDED: (appointments, action) => {
      appointments.list.push(action.payload.data);
    },
    APPOINTMENTS_UPDATED: (appointments, action) => {
      const index = appointments.list.findIndex(
        (appointment) => appointment.id === action.payload.data.id
      );
      appointments.list[index] = action.payload.data;
    },
  },
});

const {
  APPOINTMENTS_ADDED,
  APPOINTMENTS_UPDATED,
  APPOINTMENTS_REQUESTED,
  APPOINTMENTS_RECEIVED,
  APPOINTMENTS_REQUEST_FAILED,
  APPOINTMENTS_COUNT,
  APPOINTMENTS_MISSED,
  APPOINTMENTS_PASSED,
  APPOINTMENTS_RESCHEDULE,
} = slice.actions;

// Action Creators
const url = API_ENDPOINT;
const state_url = '/statistics';
export const getAppointmentCount = (searchQuery, status) => (dispatch) => {
  let query = '';
  if (searchQuery !== '') query += `patient.name=${searchQuery}`;
  if (status !== null) query += `status=${status}`;
  dispatch(
    apiCallBegan({
      url: `${url}/${state_url}?${query}`,
      onSuccess: APPOINTMENTS_COUNT.type,
    })
  );
};

export const getStatistic = (status) => (dispatch) => {
  let type = null;
  if (status === 'Missed') type = APPOINTMENTS_MISSED.type;
  if (status === 'Passed') type = APPOINTMENTS_PASSED.type;
  if (status === 'Reschedule') type = APPOINTMENTS_RESCHEDULE.type;
  dispatch(
    apiCallBegan({
      url: `${url}/${state_url}?status=${status}`,
      onSuccess: type,
    })
  );
};

export const getAllAppointments =
  (state) => (searchQuery) => (sortColumn) => (dispatch) => {
    const { status, page, limit } = state;
    let query = `limit=${limit}&page=${page}`;
    if (searchQuery !== '') query += `&patient.name=${searchQuery}`;
    if (status !== null) query += `&status=${status}`;
    if (sortColumn !== '') query += `&sort=${sortColumn}`;
    dispatch(
      apiCallBegan({
        url: `${url}?${query}`,
        onStart: APPOINTMENTS_REQUESTED.type,
        onSuccess: APPOINTMENTS_RECEIVED.type,
        onError: APPOINTMENTS_REQUEST_FAILED.type,
      })
    );
  };

export const addNewAppointment = (appointment) =>
  apiCallBegan({
    url,
    method: 'post',
    data: appointment,
    onSuccess: APPOINTMENTS_ADDED.type,
    onError: APPOINTMENTS_REQUEST_FAILED.type,
  });

export const updateAppointment = (appointment, id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: 'patch',
    data: appointment,
    onSuccess: APPOINTMENTS_UPDATED.type,
    onError: APPOINTMENTS_REQUEST_FAILED.type,
  });

// Selector

export default slice.reducer;

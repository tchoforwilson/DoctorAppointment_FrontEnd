import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
    name: 'appointments',
    initialState: {
        list: [], 
        feature: {
            missed: null,
            rescheduled: null,
            passed:null
        },
        loading: false,
    },
    reducers: {
        APPOINTMENTS_REQUESTED: (appointments, action) => {
            appointments.loading = true;
        },
        APPOINTMENTS_RECEIVED: (appointments, action) => {
            appointments.list = action.payload;
            appointments.loading = false;
        },
        APPOINTMENTS_REQUEST_FAILED: (appointments, action) => {
            appointments.loading = false;
        },
        APPOINTMENTS_REQUEST_ADDED: (appointments, action) => {
            appointments.list.push(action.payload);
        }
    }
})

export default slice;
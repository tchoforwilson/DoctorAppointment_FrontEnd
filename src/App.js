import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Appointments from './components/appointments';
import AddAppointment from './components/addAppointment';

import { HOME, ADD_APPOINTMENT } from './config/AppPath';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Appointments />} />
      <Route path={ADD_APPOINTMENT} element={<AddAppointment />} />
    </Routes>
  );
};

export default App;

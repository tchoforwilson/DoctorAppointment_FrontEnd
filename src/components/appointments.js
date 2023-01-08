import React, { useState } from "react";

import NavBar from "./common/navbar";
import AppBox from "./common/AppBox";
import AppointmentTable from "./AppointmentTable";

import { DataContext } from '../config/Context';

import '../styles/appointments.css';


const Appointments = () => {

  const [appointments, setAppointments] = useState([{id:1, name: 'Fatima Halima', code: 'A01021022', age: 35, status: 'passed' },{id:2, name: 'Sirri Mokoko', code: 'A02021022', age: 25, status: 'passed' }]);

  //setAppointments([{ name: 'Fatima Halima', code: 'A01021022', age: 35, status: 'passed' }]);

  return (
    <main className="content">
      <NavBar title="DrNG" name="PATIENTS" brandWidth={30} />
      <div className="container">
        <div className="d-flex justify-content-around mt-5 mb-3">
          <div className="text-danger text-decoration-underline">Appointments</div>
          <div className="searchBox"> 
            <input name="search" type="search" placeholder="Search" autoComplete="off" />
            <span className="fa fa-search"></span>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around mt-3">
          <AppBox data="Missed" count={15} />
          <AppBox data="Rescheduled" count={21}  />
          <AppBox data="Passed" count={5}  />
        </div>
        <div className="mt-4">
          <DataContext.Provider value={appointments}>
            <AppointmentTable  />
          </DataContext.Provider>
        </div>
      </div>
    </main>
  );
};

export default Appointments;

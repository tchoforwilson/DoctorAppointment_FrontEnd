import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from './common/navbar';
import AppBox from './common/AppBox';
import Button from './common/button';
import AppointmentTable from './AppointmentTable';
import Pagination from './common/pagination';
import { ADD_APPOINTMENT } from '../config/AppPath';

import { DataContext } from '../config/Context';

import '../styles/appointments.css';

const Appointments = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'Fatima Halima',
      code: 'A01021022',
      age: 35,
      status: 'passed',
    },
    {
      id: 2,
      name: 'Sirri Mokoko',
      code: 'A02021022',
      age: 25,
      status: 'passed',
    },
  ]);

  const [features, setFeatures] = useState({
    currentPage: 1,
    pageSize: 10,
    searchQuery: '',
    selectedStatus: null,
  });

  const handlePageChange = (e) => {};

  const handleClick = () => navigate(ADD_APPOINTMENT);

  useEffect(() => {});

  return (
    <main className="content">
      <NavBar title="DrNG" name="PATIENTS" brandWidth={30} />
      <section>
        <div className="d-flex justify-content-around mt-5 mb-3">
          <div className="text-danger text-decoration-underline">
            Appointments
          </div>
          <div className="searchBox">
            <input
              name="search"
              type="search"
              placeholder="Search"
              autoComplete="off"
            />
            <span className="fa fa-search"></span>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex flex-row justify-content-around mt-3">
          <AppBox data="Missed" count={15} />
          <AppBox data="Rescheduled" count={21} />
          <AppBox data="Passed" count={5} />
        </div>
      </section>
      <section className="mt-4">
        <div className="ml-5">
          <DataContext.Provider value={appointments}>
            <AppointmentTable />
          </DataContext.Provider>
        </div>
        <div className="d-flex justify-content-around mr-3 mt-4">
          <div>
            <Pagination
              currentPage={features.currentPage}
              pageSize={features.pageSize}
              itemsCount={appointments.length}
              onPageChange={handlePageChange}
            />
          </div>
          <div>
            <Button name={'+'} handleClick={handleClick} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointments;

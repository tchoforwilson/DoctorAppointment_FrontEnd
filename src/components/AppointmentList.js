import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from './common/navbar';
import AppBox from './common/AppBox';
import Button from './common/button';
import AppointmentTable from './AppointmentTable';
import Pagination from './common/pagination';

import {
  getAllAppointments,
  getAppointmentCount,
  getStatistic,
} from '../store/appointments';
import { ADD_APPOINTMENT } from '../config/AppPath';
import { CONST_ONEU } from '../config/Basic';

import { DataContext, SortContext } from '../config/Context';

import '../styles/appointments.css';

const Appointments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    list: appointments,
    count: totalAppointments,
    statistic,
  } = useSelector((state) => state.appointments);

  const [query, setQuery] = useState({
    page: CONST_ONEU,
    limit: 4,
    status: null,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState('');

  const handlePrevClick = () => {
    let data = query;
    if (data.page > CONST_ONEU) data.page -= CONST_ONEU;
    setQuery({ ...data });
    return;
  };
  const handleNextClick = () => {
    let data = query;
    if (data.page < Math.ceil(totalAppointments / data.limit))
      data.page += CONST_ONEU;
    setQuery({ ...data });
    return;
  };
  const handlePageChange = (page) => {
    let data = query;
    data.page = page;
    setQuery({ ...data });
  };

  const handleBtnClick = () => navigate(ADD_APPOINTMENT);

  const handleSearch = () =>
    dispatch(getAllAppointments(query)(searchQuery)(sortColumn));

  useEffect(() => {
    let unsubscribe = null;
    unsubscribe = dispatch(getAllAppointments(query)(searchQuery)(sortColumn));
    unsubscribe = dispatch(getAppointmentCount(searchQuery, query.status));
    unsubscribe = dispatch(getStatistic('Missed'));
    unsubscribe = dispatch(getStatistic('Passed'));
    unsubscribe = dispatch(getStatistic('Rescheduled'));
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, sortColumn]);

  return (
    <main className="content">
      <NavBar title="DrNG" name="PATIENTS" brandWidth={30} />
      <section>
        <div className="d-flex justify-content-around mt-5 mb-3">
          <div
            className="text-danger text-decoration-underline"
            id="heading-title"
          >
            Appointments
          </div>
          <div className="searchBox">
            <input
              name="search"
              type="search"
              value={searchQuery}
              placeholder="Search"
              autoComplete="off"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span
              name="search"
              className="fa fa-search"
              onClick={handleSearch}
            ></span>
          </div>
        </div>
      </section>
      <section>
        <div className="d-flex flex-row justify-content-around mt-3">
          <AppBox data="Missed" count={statistic.missed} />
          <AppBox data="Rescheduled" count={statistic.reschedule} />
          <AppBox data="Passed" count={statistic.passed} />
        </div>
      </section>
      <section className="mt-4">
        <div className="ml-5">
          <DataContext.Provider value={appointments}>
            <SortContext.Provider value={{ sortColumn, setSortColumn }}>
              <AppointmentTable />
            </SortContext.Provider>
          </DataContext.Provider>
        </div>
        <div className="d-flex justify-content-around mr-3 mt-4">
          <div>
            <Pagination
              currentPage={query.page}
              pageSize={query.limit}
              itemsCount={totalAppointments}
              onPageChange={handlePageChange}
              onPrevClick={handlePrevClick}
              onNextClick={handleNextClick}
            />
          </div>
          <div>
            <Button name={'+'} handleClick={handleBtnClick} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointments;

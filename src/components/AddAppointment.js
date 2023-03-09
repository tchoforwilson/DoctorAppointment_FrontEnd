import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import NavBar from './common/navbar';
import Input from './common/input';
import Select from './common/select';
import TextArea from './common/textArea';
import Button from './common/button';
import Alert from './common/Alert';

import { addNewAppointment } from '../store/appointments';
import { HOME } from '../config/AppPath';

import '../styles/modules/addRecord.module.css';

const AddAppointment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { type, message } = useSelector((state) => state.appointments.feedback);
  const { id } = useParams();

  const [appointment, setAppointment] = useState({
    code: '',
    date: '',
    firstTime: 'No',
    requestDate: '',
    status: 'Pending',
    time: '',
    patient: {
      name: '',
      gender: 'Male',
      age: '',
      phone: '',
      email: '',
      address: { address: '', city: '' },
    },
    notes: {
      before: '',
      after: '',
    },
  });

  const handleChange = (e) => {
    const data = appointment;
    _.set(data, e.target.name, e.target.value);
    setAppointment({ ...data });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addNewAppointment(appointment));
  };

  return (
    <main>
      <NavBar title="DRNG" name="PATIENTS" brandWidth={75} />
      {message !== '' && (
        <Alert
          error={message.split('.')[0]}
          message={message.split('.')[1]}
          type={type}
        />
      )}
      <div className="row mt-5">
        <div className="col-md-1 d-flex justify-content-center">
          <span
            className="fa fa-arrow-left"
            onClick={() => navigate(HOME)}
          ></span>
        </div>
        <div className="col-md-11 pb-5">
          <div className="d-flex" style={{ position: 'relative' }}>
            <div>
              <h5>NEW RECORD</h5>
            </div>
            <div
              style={{
                borderBottom: '2px solid #c82333',
                width: '60px',
                left: '45%',
                top: '55%',
                position: 'absolute',
              }}
            ></div>
          </div>
          <form className="my-5">
            <section>
              <h6>
                <b>General Information</b>
              </h6>
              <div className="d-flex justify-content-between">
                <Input
                  label="Unique Code"
                  name="code"
                  value={appointment.code}
                  handleChange={handleChange}
                />
                <Input
                  label="Name"
                  name="patient.name"
                  value={appointment.patient.name}
                  handleChange={handleChange}
                />
                <Select
                  label="Sex"
                  name="patient.gender"
                  value={appointment.patient.gender}
                  items={['Male', 'Female']}
                  handleChange={handleChange}
                />
                <Input
                  label="Age"
                  name="patient.age"
                  value={appointment.patient.age}
                  handleChange={handleChange}
                  type="number"
                />
                <Input
                  label="Phone"
                  name="patient.phone"
                  value={appointment.patient.phone}
                  handleChange={handleChange}
                />
                <Input
                  label="Email"
                  name="patient.email"
                  value={appointment.patient.email}
                  handleChange={handleChange}
                  type="email"
                />
              </div>
            </section>
            <div
              className="mb-5"
              style={{ width: '100%', borderBottom: '2px solid #ccc' }}
            ></div>
            <section>
              <h6>
                <b>Appointment Information</b>
              </h6>
              <div className="d-flex justify-content-between">
                <Input
                  label="Appointment date"
                  name="date"
                  value={appointment.date}
                  handleChange={handleChange}
                  type="date"
                />
                <Select
                  label="First time"
                  name="firstTime"
                  value={appointment.firstTime}
                  items={['Yes', 'No']}
                  handleChange={handleChange}
                />
                <Input
                  label="Request date"
                  name="requestDate"
                  value={appointment.requestDate}
                  handleChange={handleChange}
                  type="date"
                />
                <Select
                  label="Appointment status"
                  name="status"
                  value={appointment.status}
                  items={['Pending', 'Passed', 'Reschedule', 'Missed']}
                  handleChange={handleChange}
                />
                <Input
                  label="Appointment Time"
                  name="time"
                  value={appointment.time}
                  handleChange={handleChange}
                />
              </div>
            </section>
            <section>
              <h6>
                <b>Address Information</b>
              </h6>
              <div className="d-flex">
                <div>
                  <Input
                    label="Address 1"
                    name="patient.address.address"
                    value={appointment.patient.address.address}
                    handleChange={handleChange}
                  />
                </div>
                <div className="ml-5">
                  <Input
                    label="City"
                    name="patient.address.city"
                    value={appointment.patient.address.city}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </section>
            <section>
              <h6>
                <b>Notes</b>
              </h6>
              <div className="d-flex">
                <div>
                  <TextArea
                    label="Before appointment"
                    name="notes.before"
                    value={appointment.notes.before}
                    handleChange={handleChange}
                  />
                </div>
                <div className="ml-5">
                  <TextArea
                    label="After appointment"
                    name="notes.after"
                    value={appointment.notes.after}
                    handleChange={handleChange}
                  />
                </div>
              </div>
            </section>
            <section>
              <Button name="Save" handleClick={handleClick} />
            </section>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddAppointment;

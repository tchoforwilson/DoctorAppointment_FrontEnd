import React, { useState } from "react";
import NavBar from "./common/navbar";
import Input from "./common/input";
import Select from "./common/select";
import TextArea from "./common/textArea";
import Button from "./common/button";

const AddAppointment = () => {
  const [patient, setPatient] = useState({
    name: '', gender: '', phone: '', email: '', address: {
    address: '',city:''
  }})
  const [appointment, setAppointment] = useState({
    appointmentCode: '', appointmentDate: '', firstTime: '', requestDate: '', appointmentStatus: '', appointmentTime: '', notes: {
      beforeAppointment: '',
      afterAppointment:''
    }
  })
  //const [errors, setErrors] = useState([]);
   const handlePatientChange = (e) => {
   const data = patient;
   data[e.target.name] = e.target.value;
   setPatient({ ...data });
 }
  const handleAppointmentChange = (e) => {
    const data = appointment;
    data[e.target.name] = e.target.value;
    setAppointment({ ...data });
  }

  return (
    <main className="content">
      <NavBar title="DRNG" name="PATIENTS" brandWidth={85} />
      <div className="form">
      <div className="form-header">
        <h5><b>NEW RECORD</b></h5>
      </div>
      <div className="form-content">
      <form>
        <div className="information__general">
          <h6><b>General Information</b></h6>
          <div className="d-flex justify-content-between">
            <Input label="Unique Code" name="code" value={appointment.code} handleChange={handleAppointmentChange} />
            <Input label="Name" name="name" value={patient.name} handleChange={handlePatientChange} />
            <Select label="Sex" name="gender" value={patient.gender} items={["Male", "Female"]} handleChange={handlePatientChange} />
            <Input label="Phone" name="phone" value={patient.phone} handleChange={handlePatientChange} />
            <Input label="Email" name="email" value={patient.email} handleChange={handlePatientChange} type="email" />
          </div>
        </div>
        <div className="information__appointment">
          <h6><b>Appointment Information</b></h6>
          <div className="d-flex justify-content-between">
              <Input label="Appointment date" name="date" value={appointment.appointmentDate} handleChange={handleAppointmentChange} type="date" />
              <Select label="First time" name="time" value={appointment.firstTime} items={["Yes","No"]} handleChange={handleAppointmentChange} />
              <Input label="Request date" name="requestDate" value={appointment.requestDate} handleChange={handleAppointmentChange} type="date" />
              <Select label="Appointment status" name="status" value={appointment.appointmentStatus} items={["Pending","Passed","Reschedule","Missed"]} handleChange={handleAppointmentChange} />
              <Input label="Appointment Time" name="time" value={appointment.appointmentTime} handleChange={handleAppointmentChange} />
          </div>
        </div>
        <div className="information__address">
          <h6><b>Address Information</b></h6>
          <div className="d-flex">
            <Input label="Address 1" name="address" value={patient.address.address} handleChange={handlePatientChange} />
            <Input label="City" name="city" value={patient.address.city} handleChange={handlePatientChange} />
          </div>
        </div>
        <div className="information__notes">
          <h6><b>Notes</b></h6>
          <div className="d-flex">
            <TextArea label="Before appointment" name="beforeAppointment" value={appointment.notes.beforeAppointment} handleChange={handleAppointmentChange} />
            <TextArea label="After appointment" name="afterAppointment" value={appointment.notes.afterAppointment} handleChange={handleAppointmentChange} />
          </div>
        </div>
        <Button name="Save"/>
        </form>
        </div>
        </div>
    </main>
  );
};

export default AddAppointment;

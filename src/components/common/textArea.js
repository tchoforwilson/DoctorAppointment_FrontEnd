import React from "react";

const TextArea = ({ name, label, value, handleChange }) => {
  return (
    <div className="form-group my-3">
      <label htmlFor={name}>
       {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        rows="4"
        className="form-control"
      ></textarea>
    </div>
  );
};

export default TextArea;
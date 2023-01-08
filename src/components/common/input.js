import React from "react";

/**
 * Render a form input field in the view
 * @param {String} name -> Input field name
 * @param {String} label -> Input form label
 * @param {} value -> default value of input if any
 * @param {String} error -> Error resulting from the input field
 * @param {function} handleChange -> Function to handle input field change
 * @param {string} type  -> Input field type
 * @returns A div of class form-group with a label and an input field
 */
const Input = ({
  name,
  label,
  value,
  error,
  handleChange,
  type = "text",
}) => {
  return (
    <div className="form-group my-3">
      <label htmlFor={name}>
       {label}
      </label>
      <input
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        type={type}
        className="form-control"
        autoComplete="off"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;

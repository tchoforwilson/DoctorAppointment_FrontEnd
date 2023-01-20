import React from 'react';


/**
 * Render a form select field in the view
 * @param {String} name -> Input field name
 * @param {String} label -> Input form label
 * @param {String} value -> Selected value of the field
 * @param {Array} items -> default value of input if any
 * @param {String} error -> Error resulting from the input field
 * @param {function} handleChange -> Function to handle input field change
 * @returns A div of class form-group with a label and an input field
 */
const Select = ({ label, name, value, items = [], error, handleChange }) => {
    return (<div className="form-group my-3">
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} value={value} className="form-control" onChange={handleChange}>
            {
                items.map((item, i) => <option key={(i + 1).toString()}>{item}</option>)
            }
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>  );
}
 
export default Select;
import React from "react";

/**
 * Render a form input field in the view
 * @param {String} name -> Input field name
 * @returns A div of class form-group with a label and an input field
 */
const NavBar = ({ title, name, brandWidth }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-0">
      <div className="navbar-brand" style={{width: `${brandWidth}%`}}>
        <span>{title}</span>
        <span className="line"></span>
        <span><strong>{name}</strong></span>
      </div>
    </nav>
  );
};

export default NavBar;

import React from 'react';

const Alert = ({ error, message, type = 'success' }) => {
  let style = 'alert-' + type + ' alert-dismissible text-center fade show';
  return (
    <div className={style} role="alert">
      <strong>{error}</strong> {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;

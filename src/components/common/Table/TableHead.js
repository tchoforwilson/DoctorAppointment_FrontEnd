import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ label, isFilterIcon = false }) => {
  return (
    <th style={headerStyle.thead}>
      <div
        style={headerStyle.container}
        className="d-flex justify-content-between container"
      >
        <div className="align-self-center font-weight-bold">{label}</div>
        <div>
          {isFilterIcon && <span className="fa fa-filter"></span>}
          <div className="d-flex flex-column align-items-end">
            <span
              style={headerStyle.icon}
              className="fa fa-chevron-up fa-arrow"
            ></span>
            <span
              style={headerStyle.icon}
              className="fa fa-chevron-down fa-arrow"
            ></span>
          </div>
        </div>
      </div>
    </th>
  );
};

TableHead.propTypes = {
  label: PropTypes.string.isRequired,
};

const headerStyle = {
  column: {
    padding: '2px',
  },
  container: {
    backgroundColor: '#fff',
    padding: '4px 10px',
    borderRadius: '5px',
  },
  icon: {
    fontSize: '12px',
    opacity: '50%',
  },
  thead: {
    borderTop: '0px',
    borderBottom: '0px',
    padding: '2px',
  },
};

export default TableHead;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SortContext } from '../../../config/Context';

const TableHead = ({ label, path, icon = false }) => {
  const { setSortColumn } = useContext(SortContext);

  return (
    <th style={headerStyle.thead}>
      <div className="d-flex justify-content-between container">
        <div>
          <span className="align-self-center font-weight-bold">{label}</span>
        </div>
        <div>
          <div className="d-flex">
            <div className="mx-1">
              {icon && <span className="fa fa-filter"></span>}
            </div>
            <div className="d-flex flex-column align-items-end">
              <span
                onClick={() => setSortColumn(path)}
                style={headerStyle.icon}
                className="fa fa-chevron-up fa-arrow"
              ></span>
              <span
                onClick={() => setSortColumn(`-${path}`)}
                style={headerStyle.icon}
                className="fa fa-chevron-down fa-arrow"
              ></span>
            </div>
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

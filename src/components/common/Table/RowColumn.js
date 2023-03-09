import React from 'react';
import _ from 'lodash';

const RowColumn = ({ item, column }) => {
  const renderCell = (item, column) => {
    const { path } = column;
    let value = _.get(item, path);
    if (column.label === 'Address') {
      const address = [
        _.get(item, column.path),
        _.get(item, 'patient.address.city'),
      ];
      value = address.join(',');
    }
    if (path === 'date' || path === 'requestDate')
      value = new Date(value).toLocaleDateString();
    return value;
  };

  return column.path === 'status' ? (
    <td className="table-column">
      <span className={`status ${renderCell(item, column)}`}>
        {renderCell(item, column)}
      </span>
    </td>
  ) : (
    <td className="table-column">{renderCell(item, column)}</td>
  );
};

export default RowColumn;

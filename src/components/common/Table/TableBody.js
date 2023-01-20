import React, { useContext } from 'react';

import { ColumnContext, DataContext } from '../../../config/Context';
import RowColumn from './RowColumn';

const TableBody = () => {
  const columns = useContext(ColumnContext);
  const data = useContext(DataContext);

  const createKey = (item, column) => item.id + column.path;

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id} className="table-row">
          {columns.map((column) => (
            <RowColumn
              key={createKey(item, column)}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

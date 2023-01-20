import React, { useContext } from 'react';

import { ColumnContext } from '../../../config/Context';
import TableHead from './TableHead';

const TableHeader = () => {
  const columns = useContext(ColumnContext);

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <TableHead
            key={column.path}
            label={column.label}
            icon={column?.icon}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

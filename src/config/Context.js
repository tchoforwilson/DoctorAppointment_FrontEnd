import React from 'react';

import { appointmentColumns } from './TableColumns';

export const ColumnContext = React.createContext(appointmentColumns);

export const DataContext = React.createContext([]);

export const SortContext = React.createContext({
  sortColumn: { path: '' },
  setSortColumn: (path) => {},
});

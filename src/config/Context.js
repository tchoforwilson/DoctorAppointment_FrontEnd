import React from 'react';

import { appointmentColumns } from './TableColumns';

export const ColumnContext = React.createContext(appointmentColumns);

export const DataContext = React.createContext([]);

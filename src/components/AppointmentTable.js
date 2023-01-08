import React from 'react';

import Table from './common/Table/Table';
import { appointmentColumns } from '../config/TableColumns';
import { ColumnContext} from '../config/Context';

const AppointmentTable = () => { 
    
    return (<ColumnContext.Provider value={appointmentColumns}>
        <Table />
    </ColumnContext.Provider>)
}

export default AppointmentTable;
import React from 'react';

const RowColumn = ({ item,column }) => {

    const renderCell = (item, column) => item[column.path];
    
    return (column.path === "status" ?
        <td className="table-column"><span className={`status ${renderCell(item, column)}`}>{renderCell(item, column)}</span></td> :
        <td className="table-column">{renderCell(item, column)}</td>)
}

export default RowColumn;
import React from 'react';

const TableHead = ({ label, isFilterIcon = false }) => {

    return(
        <th>
            <div className="d-flex justify-content-between header">
                <div className="align-self-center">
                    {label}
                </div>
                <div>
                    {isFilterIcon && <span className="fa fa-filter"></span>}
                    <div className="d-flex flex-column align-items-end">
                        <span className="fa fa-chevron-up fa-arrow"></span>
                        <span className="fa fa-chevron-down fa-arrow"></span>
                    </div>
                </div>
            </div>
        </th>
    );
}

export default TableHead;
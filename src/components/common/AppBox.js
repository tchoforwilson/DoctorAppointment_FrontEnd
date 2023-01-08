import React from "react";

import "../../styles/AppBox.css";

const AppBox = ({ data, count }) => {
  let color;
  let backgroundColor;
  if (data === 'Missed') {
    color = '#f00';
    backgroundColor = '#e10000';
  } else if (data === 'Rescheduled') {
    color = 'yellow';
    backgroundColor = 'yellow';
  } else if(data === 'Passed'){
    color = '#00f';
    backgroundColor = '#0f0';
  }
  return (
    <div className="d-flex flex-column flex-1 px-2 py-1 AppBox" style={{backgroundColor}}>
      <div>{data}</div>
      <div style={{color}}><b>{count.toString().padStart(2,"0")}</b></div>
    </div>
  );
};

export default AppBox;

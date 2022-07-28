import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import React from "react";

const Top = (props) => {
  return (
    <>
      <DatePicker
        selected={props.startDate}
        onChange={(date) => props.setStartDate(date)}
        selectsStart
        startDate={props.startDate}
      />
      <DatePicker
        selected={props.endDate}
        onChange={(date) => props.setEndDate(date)}
        selectsEnd
        endDate={props.endDate}
        minDate={props.startDate}
      />
    </>
  );
};

export default Top;

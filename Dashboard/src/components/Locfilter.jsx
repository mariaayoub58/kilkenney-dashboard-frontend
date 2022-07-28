import React, { useContext } from "react";
import { useState } from "react";
import { locationlist } from "../Data/Data.js";

const Locfilter = (props) => {
  return (
    <div className="Locfilter">
      <select
        onChange={(e) => props.setLocation(e.target.value)}
        className="dropdown"
        aria-label="Filter Countries By Region"
      >
        {locationlist.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <span className="focus"></span>
    </div>
  );
};

export default Locfilter;

import React from "react";
import "./Sidebar.css";
import { SidebarData } from "../Data/Data.js";
import { useEffect, useState } from "react";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilEstate } from "@iconscout/react-unicons";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected == index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

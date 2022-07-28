import React from "react";
import Bar from "./Bar";
import Customer from "./Customer";
import { useEffect, useState } from "react";
import "./RightSide.css";
import Chart from "react-apexcharts";
import { bardata } from "../Data/Data.js";
import { Paper, Box } from "@mui/material";
import moment from "moment";

const RightSide = () => {
  const [customerSales, setCustomersales] = useState([]);
  const [departmentName, setDepartmentname] = useState([]);
  const [departmentSales, setDepartmentsales] = useState([]);
  const [customerName, setCustomername] = useState([]);

  useEffect(() => {
    const getTransactionDetails = async () => {
      const reqData = await fetch(
        "http://localhost:3001/getTransactionDetails",
        {
          method: "POST",
          mode: "cors",

          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const resData = await reqData.json();

      setDepartmentname(Object.keys(resData.DepartmentSales));
      setDepartmentsales(Object.values(resData.DepartmentSales));
      setCustomername(Object.keys(resData.CustomerSales));
      setCustomersales(Object.values(resData.CustomerSales));
    };

    getTransactionDetails();
  }, []);

  return (
    <React.Fragment>
      <div className="RightSide">
        <h3>Customer Sale</h3>
        <div className="container-fluid mb-5">
          <Chart
            type="bar"
            width={500}
            series={[
              {
                data: customerSales,
              },
            ]}
            options={{
              xaxis: {
                categories: customerName,
              },
            }}
          ></Chart>
        </div>
        <h3>Category Sales</h3>
        <div className="container-fluid mb-3">
          <Chart
            series={departmentSales}
            type="pie"
            width={380}
            options={{
              labels: departmentName,
            }}
          ></Chart>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightSide;

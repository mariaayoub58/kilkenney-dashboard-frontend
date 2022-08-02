import React, { useEffect, useState } from "react";
import "./MainDash.css";
import Locfilter from "./Locfilter";
import Top from "./Top";
import Daterange from "./Daterange";
import Cards from "./Cards";
import Cards1 from "./Cards1";
import Table from "./Table";
import moment from "moment";
import { Button } from "react-bootstrap";
import { CardsData } from "../Data/Data.js";
import { CardsData1 } from "../Data/Data.js";
import Chart from "react-apexcharts";

const MainDash = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [dashboardData1, setDashboardData1] = useState(null);
  const [totalSales, setTotalsales] = useState([]);
  const [cardsData, setCardsData] = useState(CardsData);
  const [cardsData1, setCardsData1] = useState(CardsData1);
  const [yearname, setYearname] = useState([]);
  const [filter, setFilter] = useState("Dublin");
  const [startDate, setStartDate] = useState(new Date("12/01/2021"));
  const [endDate, setEndDate] = useState(new Date("12/31/2021"));
  const [customerSales, setCustomersales] = useState([]);
  const [departmentName, setDepartmentname] = useState([]);
  const [departmentSales, setDepartmentsales] = useState([]);
  const [customerName, setCustomername] = useState([]);
  useEffect(() => {
    go();
  }, []);

  const go = () => {
    var payload = {
      location: filter,
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
    };

    fetch("http://localhost:3001/getTransactionDetails", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        cardsData[0].value = data.QtySold;
        cardsData[1].value = data.Transactioncount;
        cardsData[2].value = data.TotalSales;
        cardsData1[0].value = data.Profit;
        cardsData1[1].value = data.ATV;
        cardsData1[2].value = data.ProfitMargin;
        cardsData[0].xaxis = Object.keys(data.WeeklyQtySold);
        cardsData[0].yaxis = Object.values(data.WeeklyQtySold);
        cardsData[1].xaxis = Object.keys(data.WeeklyTrans);
        cardsData[1].yaxis = Object.values(data.WeeklyTrans);
        cardsData[2].xaxis = Object.keys(data.WeeklyPay);
        cardsData[2].yaxis = Object.values(data.WeeklyPay);
        cardsData1[0].xaxis = Object.keys(data.WeeklyPro);
        cardsData1[0].yaxis = Object.values(data.WeeklyPro);
        cardsData1[1].xaxis = Object.keys(data.WeeklyAtv);
        cardsData1[1].yaxis = Object.values(data.WeeklyAtv);
        cardsData1[2].xaxis = Object.keys(data.WeeklyMargin);
        cardsData1[2].yaxis = Object.values(data.WeeklyMargin);

        console.log("api response: ", data);
        setDashboardData(cardsData);
        setDashboardData1(cardsData1);
        setTotalsales(data.YearlySalesResult);
        setYearname(data.YearName);
        setDepartmentname(Object.keys(data.DepartmentSales));
        setDepartmentsales(Object.values(data.DepartmentSales));
        setCustomername(Object.keys(data.CustomerSales));
        setCustomersales(Object.values(data.CustomerSales));
        console.log("cards data", JSON.stringify(dashboardData));
        console.log("cards data", JSON.stringify(dashboardData1));
      });
  };

  return (
    <>
      <div className="MainDash">
        <div className="filterwrapper">
          <Locfilter setLocation={setFilter} />
          <Top
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
          />
          <Button variant="info" onClick={go}>
            Go
          </Button>
        </div>
        <Cards data={dashboardData} />
        <Cards1 data={dashboardData1} />
        <h3>Yearly Total Sales</h3>
        <div className="container-fluid mt-3 mb-3">
          <Chart
            type="line"
            width="100%"
            height={240}
            series={[
              {
                name: "Yearly sales amount",
                data: totalSales,
              },
            ]}
            options={{
              xaxis: {
                categories: yearname,
              },
            }}
          ></Chart>
        </div>
      </div>
      <React.Fragment>
        <div className="RightSide">
          <h3>Customer Sale</h3>
          <div className="container-fluid mb-5">
            <Chart
              type="bar"
              width={500}
              series={[
                {
                  name: "No. of Customers",
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
    </>
  );
};

export default MainDash;

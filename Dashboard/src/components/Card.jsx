import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import "./Card.css";
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

//CompactCard
function CompactCard({ param, setExpanded }) {
  const Png = param.png;

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <span>{param.title}</span>
      <div className="radialBar"></div>
      <div className="detail">
        <Png />
        <span>{param.value}</span>
      </div>
    </motion.div>
  );
}

//ExpandedCard
function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title} </span>
      <div className="chartContainer">
        <Chart
          series={[
            {
              data: param.yaxis,
            },
          ]}
          type="area"
          options={{
            xaxis: {
              categories: param.xaxis,
            },
          }}
        ></Chart>
      </div>
    </motion.div>
  );
}
export default Card;

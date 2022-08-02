import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import "./Card1.css";
const Card1 = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard1 param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard1 param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

//CompactCard
function CompactCard1({ param, setExpanded }) {
  const Png = param.png;

  return (
    <motion.div
      className="CompactCard1"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard1"
    >
      <span>{param.title}</span>

      <div className="radialBar1"></div>
      <div className="detail1">
        <Png />
        <span>{param.value}</span>
      </div>
    </motion.div>
  );
}

//ExpandedCard
function ExpandedCard1({ param, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard1"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard1"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title} </span>
      <div className="chartContainer1">
        <Chart
          series={[
            {
              name: "Stats per Day",
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
export default Card1;

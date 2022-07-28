import React from "react";
import { CardsData1 } from "../Data/Data.js";
import "./Cards1.css";
import Card1 from "./Card1";
const Cards1 = () => {
  return (
    <div className="Cards1">
      {CardsData1.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card1
              title={card.title}
              color={card.color}
              value={card.value}
              xaxis={card.xaxis}
              yaxis={card.yaxis}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Cards1;

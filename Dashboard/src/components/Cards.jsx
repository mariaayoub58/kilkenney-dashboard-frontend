import React from "react";
import { CardsData } from "../Data/Data.js";
import "./Cards.css";
import Card from "./Card";
const Cards = ({ data }) => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Card
              title={card.title}
              color={card.color}
              value={card.value}
              xaxis={card.xaxis}
              yaxis={card.yaxis}
              png={card.png}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

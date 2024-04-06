import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Card from "./Card";

const Column = ({ title, id }) => {
    const [showForm, setShowForm] = useState(false);
    const [cards, setCards] = useState([
      {
          title: "he",
          date: "2024-04-05",
          id: 1712324705868,
          column: "Todo"
      },
      {
          title: "example",
          date: "2024-04-06",
          id: 1712324705869,
          column: "Doing"
      },
      {
          title: "test",
          date: "2024-04-07",
          id: 1712324705870,
          column: "Done"
      }
    ]);

    return (
      <div className="Column">
        <h2 className="colTitle">
          {title}
        </h2>
        <Card />
        {title === "Todo" && (
        <button className="Button">
            <FaPlus className="icon" />
            Skapa ny uppgift
            </button>)}
      </div>
    );
};

export default Column;
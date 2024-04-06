import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Card from "./Card";

const Column = ({ title, colId }) => {
    const [task, setTask] = useState({title: ""});
    const [showForm, setShowForm] = useState(false);
    const [cards, setCards] = useState([
      {
          title: "Lära mig React",
          date: "2024-04-05",
          id: 1712324705868,
          column: 1
      },
      {
          title: "Lyssna på podcast",
          date: "2024-04-06",
          id: 1712324705869,
          column: 2
      },
      {
          title: "Tvätta",
          date: "2024-04-07",
          id: 1712324705870,
          column: 3
      }
    ]);
    

      const handleButtonClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Knappklick!")
        setShowForm(true);
      };

      const handleInput = (e) => {
        const now = new Date().toLocaleDateString();
        e.preventDefault();
        e.stopPropagation();
        setTask({
          title: e.target.value,
          date: now,
          id: new Date().getTime(),
          column: 1
        })
    }

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);
        console.log(cards)
        setCards((prevCards) => [...prevCards, task]);
        setTask({ title: "" });
      }

    const filteredCards = cards.filter(card => card.column === colId);

    return (
      <div className="Column">
        <h2 className="colTitle">
          {title}
        </h2>
        {filteredCards.map(card => (
                <Card
                    key={card.id}
                    title={card.title}
                    id={card.id}
                    column={card.column}
                />
            ))}
 

        {showForm ? (
  <form className="taskForm">
    <input
      className="taskInput"
      type="text"
      value={task.title}
      onChange={handleInput}
      autoFocus
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    />
    <button type="submit" className="addTaskBtn" onClick={handleSubmit}>
      Lägg till
    </button>
  </form>
) : (
  title === "Todo" && (
    <button className="Button" onClick={handleButtonClick}>
      <FaPlus className="icon" />
      Skapa ny uppgift
    </button>
  )
)}
            

      </div>
    );
};

export default Column;
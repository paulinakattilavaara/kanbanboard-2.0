import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
    
    const location = useLocation();

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
        if (task.title.trim() !== "") {
        setShowForm(false);
        setCards((prevCards) => [...prevCards, task]);
        setTask({ title: "" })}
      }


      const deleteCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

  const onMove = (e, cardId, newColumnId) => {
    if (newColumnId >= 1 && newColumnId <= 3) {
        setCards(prevCards => {
            return prevCards.map(card => {
                if (card.id === cardId) {
                    return { ...card, column: newColumnId };
                } else {
                    return card;
                }
            });
        });
        console.log(`Kort med id ${cardId} flyttades till kolumn ${newColumnId}.`);
    } else {
        console.log(`Felaktigt kolumnvärde: ${newColumnId}.`);
        e.stopPropagation();
        e.preventDefault();
    }
};

    const filteredCards = cards.filter(card => card.column === colId);

    const todoCards = cards.filter(card => card.column === 1); 
    const doingCards = cards.filter(card => card.column === 2);
    const doneCards = cards.filter(card => card.column === 3);


    useEffect(() => {
      console.log(filteredCards);
    }, [filteredCards]);

    return (
      <div className="Column">
        <h2 className="colTitle">
          {title}
        </h2>

        {filteredCards.map(card => (
                <Card
                    date={card.date}
                    key={card.id}
                    title={card.title}
                    id={card.id}
                    column={card.column}
                    colId={colId}
                    onMove={onMove}
                    card={card}
                    onDelete={() => deleteCard(card.id)}
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
    title === "Todo" && location.pathname !== "/todo" &&  (
    <button className="Button" onClick={handleButtonClick}>
      <FaPlus className="icon" />
      Skapa ny uppgift
    </button>
  )
)}
      {location.pathname === "/todo" && (
       todoCards.map((card) => (
        <Card
          date={card.date}
          key={card.id}
          title={card.title}
          id={card.id}
          column={card.column}
          colId={colId}
          onMove={onMove}
          card={card}
          onDelete={() => deleteCard(card.id)}
        />
      ))
      )}

{location.pathname === "/doing" && (
       doingCards.map((card) => (
        <Card
          date={card.date}
          key={card.id}
          title={card.title}
          id={card.id}
          column={card.column}
          colId={colId}
          onMove={onMove}
          card={card}
          onDelete={() => deleteCard(card.id)}
        />
      ))
      )}


{location.pathname === "/done" && (
       doneCards.map((card) => (
        <Card
          date={card.date}
          key={card.id}
          title={card.title}
          id={card.id}
          column={card.column}
          colId={colId}
          onMove={onMove}
          card={card}
          onDelete={() => deleteCard(card.id)}
        />
      ))
      )}
      </div>
    );
};

export default Column;
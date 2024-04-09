import { FaPlus } from "react-icons/fa";
import Card from "./Card";
import { useLocation } from "react-router-dom";

const Column = ({ title, colId, onMove, showForm, handleButtonClick, todoCards, doingCards, doneCards, task, handleInput, handleSubmit, deleteCard, cardsFromLocalStorage, deleteCardLocal }) => {

  const location = useLocation();

  let cardsToRender;

  if (title === "Todo") {
    cardsToRender = todoCards;
  } else if (title === "Doing") {
    cardsToRender = doingCards;
  } else if (title === "Done") {
    cardsToRender = doneCards;
  } else {
    cardsToRender = []; 
  }

    return (
      <div className="Column">
        <h2 className="colTitle">
          {title}
        </h2>


        {cardsToRender && cardsToRender.map(card => (
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

{location.pathname === "/todo" && cardsFromLocalStorage
  .filter(card => card.column === 1) 
  .map(card => (
    <Card
      key={card.id}
      date={card.date}
      title={card.title}
      id={card.id}
      column={card.column}
      onDelete={() => deleteCardLocal(card.id)}
    />
  ))
}

{location.pathname === "/doing" && cardsFromLocalStorage
  .filter(card => card.column === 2) 
  .map(card => (
    <Card
      key={card.id}
      date={card.date}
      title={card.title}
      id={card.id}
      column={card.column}
      onDelete={() => deleteCardLocal(card.id)}
    />
  ))
}

{location.pathname === "/done" && cardsFromLocalStorage
  .filter(card => card.column === 3) 
  .map(card => (
    <Card
      key={card.id}
      date={card.date}
      title={card.title}
      id={card.id}
      column={card.column}
      onDelete={() => deleteCardLocal(card.id)}
    />
  ))
}
      </div>
    );
};

export default Column;
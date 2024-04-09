import { FaPlus } from "react-icons/fa";
import Card from "./Card";
import { useLocation } from "react-router-dom";


const Column = ({ title, colId, onMove, showForm, handleButtonClick, todoCards, doingCards, doneCards, task, handleInput, handleSubmit }) => {

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


      {/* {location.pathname === "/todo" (
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
      )} */}
      </div>
    );
};

export default Column;
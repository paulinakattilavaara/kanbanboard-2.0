import Column from "./Column";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Board = () => {
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
                const updatedCards = cards.map((card) => card.id === cardId ? {...card, column: newColumnId} : card)
                setCards(updatedCards)
                console.log(updatedCards)
             
      console.log(`Kort med id ${cardId} flyttades till kolumn ${newColumnId}.`);
    }
};


  const updateCardTitle = (id, newTitle) => {
    setCards(prevCards =>
      prevCards.map(card => (card.id === id ? { ...card, title: newTitle } : card))
    );
  };



  const todoCards = cards.filter(card => card.column === 1); 
  const doingCards = cards.filter(card => card.column === 2);
  const doneCards = cards.filter(card => card.column === 3);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);


  return (
    <>
      <Link to="/todo">
        <Column title="Todo" 
        colId={1} 
        todoCards={todoCards} 
        onMove={onMove} 
        showForm={showForm} 
        handleButtonClick={handleButtonClick}
        task={task}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        deleteCard={deleteCard}
        cards={cards}
        updateCardTitle={updateCardTitle}
         />
      </Link>

      <Link to="/doing">
        <Column title="Doing" 
        colId={2} 
        doingCards={doingCards} 
        onMove={onMove} 
        handleButtonClick={handleButtonClick}
        deleteCard={deleteCard}
        cards={cards}
        updateCardTitle={updateCardTitle}
     />
      </Link>
        
      <Link to="/done">
        <Column title="Done" colId={3}
        doneCards={doneCards}
        onMove={onMove} 
        handleButtonClick={handleButtonClick}
        deleteCard={deleteCard}
        cards={cards}
        updateCardTitle={updateCardTitle} 
       />
      </Link>
    </>
  )
}

export default Board;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Header from "./components/Header";
import Column from "./components/Column";
import Missing from "./components/Missing";
import { BackgroundProvider } from "./context/BackgroundContext";
import { useState, useEffect } from "react";

function App() {

  const [cardsFromLocalStorage, setCardsFromLocalStorage] = useState([]);

  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setCardsFromLocalStorage(JSON.parse(storedCards));
    }
  }, []);


  const deleteCardLocal = (id) => {
    setCardsFromLocalStorage(cardsFromLocalStorage.filter(card => card.id !== id));
};


  return (
    <Router>
      <BackgroundProvider>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Board updateCards={setCardsFromLocalStorage} />} />
        <Route path="/todo" element={<Column title="Todo" id={1} cardsFromLocalStorage={cardsFromLocalStorage} deleteCardLocal={deleteCardLocal} />} />
        <Route path="/doing" element={<Column title="Doing" id={2} cardsFromLocalStorage={cardsFromLocalStorage} deleteCardLocal={deleteCardLocal} />} />
        <Route path="/done" element={<Column title="Done" id={3} cardsFromLocalStorage={cardsFromLocalStorage} deleteCardLocal={deleteCardLocal} />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      </main>
      </BackgroundProvider>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Header from "./components/Header";
import Column from "./components/Column";
import Missing from "./components/Missing";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/todo" element={<Column title="Todo" id={1} />} />
        <Route path="/doing" element={<Column title="Doing" id={2} />} />
        <Route path="/done" element={<Column title="Done" id={3} />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </Router>
  );
}

export default App;

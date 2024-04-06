import Column from "./Column";
import { Link } from "react-router-dom";

const Board = () => {

  return (
    <main>
      <Link to="/todo"><Column title="Todo" id={1} /></Link>
      <Link to="/doing"><Column title="Doing" id={2} /></Link>
      <Link to="/done"><Column title="Done" id={3} /></Link>
    </main>
  )
}

export default Board;
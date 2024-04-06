import Column from "./Column";
import { Link } from "react-router-dom";

const Board = () => {

  return (
    <>
      <Link to="/todo"><Column title="Todo" colId={1} /></Link>
      <Link to="/doing"><Column title="Doing" colId={2} /></Link>
      <Link to="/done"><Column title="Done" colId={3} /></Link>
    </>
  )
}

export default Board;
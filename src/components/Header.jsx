import { useNavigate } from "react-router-dom";

const Header = () => {

const navigate = useNavigate();

const backToHome = () => {
  navigate("/");
}


  return (
    <header className="Header">
        <h1 onClick={backToHome}>The Board App</h1>
    </header>
  )
}

export default Header;
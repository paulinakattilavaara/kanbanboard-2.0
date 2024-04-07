import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react"
import BackgroundContext from "../context/BackgroundContext";
import { BsPaintBucket } from "react-icons/bs";

const Header = () => {

const navigate = useNavigate();

const { backgroundColor, changeBackgroundColor } = useContext(BackgroundContext);
const [changedBackground, setChangedBackground] = useState(false);

const changeColor = () => {
  const color = changedBackground ? "#9ebbba" : "#FFFFFF";
  changeBackgroundColor(color);
  setChangedBackground(!changedBackground);
};

const backToHome = () => {
  navigate("/");
}

useEffect(() => {
  document.body.style.backgroundColor = backgroundColor;
},[backgroundColor])

  return (
    <header className="Header">
        <h1 onClick={backToHome}>The Board App</h1>
        <button onClick={changeColor} className="paint"><BsPaintBucket /></button>
    </header>
  )
}

export default Header;
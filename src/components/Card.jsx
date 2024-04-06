import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import Popup from "./Popup";

const Card = ({ title, date }) => {
    const [showPopup, setShowPopup] = useState(false);


    const handleCardClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowPopup(true);
        console.log("Card-klick")
      };

    const handleLeftClick = (event) => {
        event.stopPropagation()
        event.preventDefault()
        console.log("Klickat vänster.")
    };

    const handleRightClick = (event) => {
        event.stopPropagation()
        event.preventDefault()
        console.log("Klickat höger.")
    };

    const handleClose = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setShowPopup(false);
      };

      const handleDelete = (event) => {
        console.log("Radera kort");
        event.stopPropagation();
        event.preventDefault();
        // deleteCard(); // med denna raderas alla korten...
        // deleteCard(id); //funkar ej
        setShowPopup(false);
      };


  return (
<div className="Card" onClick={handleCardClick}>
      <p className="Card-text">
        {title}
        </p>
      <p className="Card-date">
        {date}
        </p>
      <div className="arrows">
        <button className="left-arrow" onClick={handleLeftClick}>
          <FaArrowAltCircleLeft />
        </button>
        <button className="right-arrow" onClick={handleRightClick}>
          <FaArrowAltCircleRight />
        </button>
      </div>
      {showPopup && (
        <Popup
          onClose={handleClose}
          onDelete={handleDelete}
          card={title}
          date={date}
        //   id={id}
        //   deleteCard={deleteCard} 
        />
      )}
    </div>
  )
}

export default Card;
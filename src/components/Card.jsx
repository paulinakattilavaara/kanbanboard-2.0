import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import Popup from "./Popup";

const Card = ({ title, date, id, onDelete, onMove, colId }) => {
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
        onMove(id, colId - 1); 
    };
    
    const handleRightClick = (event) => {
        event.stopPropagation()
        event.preventDefault()
        console.log("Klickat höger.")
        onMove(id, colId + 1); 
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
        onDelete(id); 
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
        <button className="left-arrow" onClick={(event) => handleLeftClick(event, colId)}>
          <FaArrowAltCircleLeft />
        </button>
        <button className="right-arrow" onClick={(event) => handleRightClick(event, colId)}>
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
        />
      )}
    </div>
  )
}

export default Card;
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Popup from "./Popup";

const Card = ({ card, updateCardTitle, title, date, id, onDelete, onMove, colId }) => {
    const [showPopup, setShowPopup] = useState(false);

    const location = useLocation();

    const handleCardClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setShowPopup(true);
      };

    const handleClose = (event) => {
        event.stopPropagation(); 
        event.preventDefault();
        setShowPopup(false);
      };

      const handleDelete = (event) => {
        event.stopPropagation();
        event.preventDefault();
        onDelete(id); 
        setShowPopup(false);
      };


      const handleUpdateTitle = (newTitle) => {
        updateCardTitle(card.id, newTitle);
      };


  return (
<div className="Card" onClick={handleCardClick}>
      <p className="Card-text">
        {title}
        </p>
      <p className="Card-date">
        {date}
        </p>
        {location.pathname === "/" && (
      <div className="arrows">
        <button className="left-arrow" onClick={(e)=>onMove(e, id, colId - 1)}> 
          <FaArrowAltCircleLeft />
        </button>
        <button className="right-arrow" onClick={(e)=>onMove(e, id, colId + 1)}> 
          <FaArrowAltCircleRight />
        </button>
      </div>)}
      {showPopup && (
        <Popup
          onClose={handleClose}
          onDelete={handleDelete}
          card={title}
          // card={card}
          updateTitle={handleUpdateTitle}
          date={date}
          id={id}
        />
      )}
    </div>
  )
}

export default Card;
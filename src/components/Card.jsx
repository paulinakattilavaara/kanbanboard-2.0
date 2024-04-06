import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import Popup from "./Popup";

const Card = ({ title }) => {
    const [showPopup, setShowPopup] = useState(false);


    const handleCardClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // setShowPopup(true);
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


  return (
<div className="Card" onClick={handleCardClick}>
      <p className="Card-text">
        {title}
        </p>
      <p className="Card-date">
        {/* {date} */}
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
        //   onClose={handleClose}
        //   onDelete={handleDelete}
        //   card={card}
        //   date={date}
        //   id={id}
        //   deleteCard={deleteCard} 
        />
      )}
    </div>
  )
}

export default Card;
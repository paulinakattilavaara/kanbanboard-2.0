import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import Popup from "./Popup";

const Card = ({ title }) => {
    const [showPopup, setShowPopup] = useState(false);


  return (
<div className="Card">
      <p className="Card-text">
        {title}
        </p>
      <p className="Card-date">
        {/* {date} */}
        </p>
      <div className="arrows">
        <button className="left-arrow">
          <FaArrowAltCircleLeft />
        </button>
        <button className="right-arrow">
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  )
}

export default Card;
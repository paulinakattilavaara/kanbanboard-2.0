import { GrClose } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Popup = ({ onClose, card, date, onDelete, updateTitle }) => {

const [editableText, setEditableText] = useState(card.title);

  const handleTextChange = (e) => {
    setEditableText(e.target.innerText);
  };

  const handleSave = (event) => {
    editableText && updateTitle(editableText);
    onClose(event);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-layout">
          <p
            className="popup-card-text"
            suppressContentEditableWarning
            contentEditable
            spellCheck={false}
            onBlur={handleTextChange}
          >
            {card.length > 20 ? `${card.slice(0, 20)}...` : card}
          </p>
          <button className="close-btn" onClick={onClose}>
            <GrClose />
          </button>
        </div>
        <p className="popup-date">{date}</p>
        <textarea
          className="popup-text"
          placeholder="Skriv något.."
          spellCheck={false}
        ></textarea>
        <div className="popup-btns">
        <button className="delete-btn" onClick={onDelete}>
          <MdDeleteForever />
        </button>
        <button className="save-btn" onClick={handleSave}>
        <FaCircleCheck />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
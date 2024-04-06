import { GrClose } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const Popup = ({ onClose, card, date, onDelete }) => {

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-layout">
          <p
            className="popup-card-text"
            suppressContentEditableWarning
            contentEditable
            spellCheck={false}
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
        <button className="delete-btn" onClick={onDelete}>
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default Popup;
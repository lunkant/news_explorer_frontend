import { useModalClose } from "../../hooks/useModalClose";
import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, onSignInClick }) {
  useModalClose(isOpen, onClose);

  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="modal__container">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
          aria-label="Close"
        ></button>
        <h2 className="modal__title">Registration successfully completed!</h2>
        <button type="button" className="modal__link" onClick={onSignInClick}>
          Sign in
        </button>
      </div>
    </div>
  );
}
export default SuccessModal;

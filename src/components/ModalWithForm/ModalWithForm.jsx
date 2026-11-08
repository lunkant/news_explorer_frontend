import { useModalClose } from "../../hooks/useModalClose.js";
import "./ModalWithForm.css";
function ModalWithForm({
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  switchText,
  switchLinkText,
  onSwitch,
  children,
  isValid,
}) {
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
          aria-label="Close Button"
        ></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit} noValidate>
          {children}
          <button
            type="submit"
            className="modal__submit-button"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>
        <p className="modal__switch-text">
          {switchText}{" "}
          <button
            type="button"
            className="modal__switch-button"
            onClick={onSwitch}
          >
            {switchLinkText}
          </button>
        </p>
      </div>
    </div>
  );
}
export default ModalWithForm;

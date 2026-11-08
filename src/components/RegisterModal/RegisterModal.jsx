import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegister, onSwitch }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({
    email: "",
    password: "",
    name: "",
  });
  useEffect(() => {
    if (isOpen) resetForm();
  }, [isOpen, resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values);
  };
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      switchText="or"
      switchLinkText="Sign in"
      onSwitch={onSwitch}
      isValid={isValid}
    >
      <label className="modal__label" htmlFor="register-email">
        Email
      </label>
      <input
        type="email"
        name="email"
        className={`modal__input ${errors.email ? "modal__input_type_error" : ""}`}
        id="register-email"
        placeholder="Enter email"
        required
        value={values.email}
        onChange={handleChange}
      />
      <span className="modal__error">{errors.email}</span>

      <label className="modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        type="password"
        name="password"
        className={`modal__input ${errors.password ? "modal__input_type_error" : ""}`}
        id="register-password"
        placeholder="Enter password"
        required
        minLength="8"
        value={values.password}
        onChange={handleChange}
      />
      <span className="modal__error">{errors.password}</span>

      <label className="modal__label" htmlFor="register-name">
        Username
      </label>
      <input
        type="text"
        name="name"
        className={`modal__input ${errors.name ? "modal__input_type_error" : ""}`}
        id="register-name"
        placeholder="Enter your username"
        required
        minLength="2"
        maxLength="30"
        value={values.name}
        onChange={handleChange}
      />
      <span className="modal__error">{errors.name}</span>
    </ModalWithForm>
  );
}
export default RegisterModal;

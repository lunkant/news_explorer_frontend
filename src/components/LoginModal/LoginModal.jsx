import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLogin, onSwitch }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isOpen) resetForm();
  }, [isOpen, resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values);
  };
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      switchText="or"
      switchLinkText="Sign up"
      onSwitch={onSwitch}
      isValid={isValid}
    >
      <label className="modal__label" htmlFor="login-email">
        Email
      </label>
      <input
        type="email"
        name="email"
        className={`modal__input ${errors.email ? "modal__input_type_error" : ""}`}
        id="login-email"
        placeholder="Enter email"
        required
        value={values.email}
        onChange={handleChange}
      />
      <span className="modal__error">{errors.email}</span>
      <label className="modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        type="password"
        name="password"
        className={`modal__input ${errors.password ? "modal__input_type_error" : ""}`}
        id="login-password"
        placeholder="Enter password"
        required
        minLength="8"
        value={values.password}
        onChange={handleChange}
      />
      <span className="modal__error">{errors.password}</span>
    </ModalWithForm>
  );
}
export default LoginModal;

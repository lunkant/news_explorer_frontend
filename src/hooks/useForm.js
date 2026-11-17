import { useState, useCallback, useRef } from "react";

export function useForm(defaultValues) {
  const initialValues = useRef(defaultValues).current;
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value, validationMessage } = evt.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validationMessage }));
    setIsValid(evt.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsValid(false);
  }, [initialValues]);

  return { values, errors, isValid, handleChange, resetForm };
}

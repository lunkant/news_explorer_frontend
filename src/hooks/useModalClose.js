import { useEffect } from "react";

export function useModalClose(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return; // closed modals don't listen

    const handleEscape = (evt) => {
      if (evt.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);
}

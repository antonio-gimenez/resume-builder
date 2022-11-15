import React from "react";

function Modal({ children, open = false, onClose }) {
  if (!open) return null;

  return <div className="modal-wrapper">{children}</div>;
}

export default Modal;

import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

function Modal({ children, open = false, onClose }) {
  if (!open) return null;

  const modalWrapper = (
    <div className="modal-wrapper">
      <div className="modal">{children}</div>
    </div>
  );

  return createPortal(modalWrapper, modalRoot);
}

export default Modal;

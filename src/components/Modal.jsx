import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

function Modal({ children, open = false }) {
  if (!open) return null;

  const modalWrapper = (
    <div className="modal-wrapper">
      <div className="modal">{children}</div>
    </div>
  );

  return createPortal(modalWrapper, modalRoot);
}

function ModalActions({ children }) {
  return <div className="modal-actions">{children}</div>;
}

function ModalContent({ children }) {
  return <div className="modal-content">{children}</div>;
}

function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}

export { Modal, ModalContent, ModalHeader, ModalActions };

export default Modal;

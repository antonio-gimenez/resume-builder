import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useKey from "../hooks/useKey";
import useOnClickOutside from "../hooks/useOnClickOutside";

const modalRoot = document.getElementById("modal-root");

function Modal({ children, open = false, close = () => {} }) {
  const modalRef = useRef();
  useOnClickOutside({ ref: modalRef, handler: () => close() });
  useKey({ key: "Escape", handler: () => close() });

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!open) return;

  const modalWrapper = (
    <div className="modal-wrapper">
      <div className="modal" ref={modalRef}>
        {children}
      </div>
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

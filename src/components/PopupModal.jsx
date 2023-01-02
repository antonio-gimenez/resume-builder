import React, { useRef, useContext } from "react";
import { createPortal } from "react-dom";
import useKeyPress from "../hooks/useKeyPress";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { ModalContext, ModalProvider } from "../contexts/ModalContext";

function PopupModal({ children, header = null, action = null, id = undefined, label = "Open Modal" }) {
  const modalRoot = document.getElementById("modal-root");
  const modalRef = useRef(null);
  const { modals, openModal, closeModal } = useContext(ModalContext);
  const isOpen = modals[id] || false;

  useOnClickOutside({ ref: modalRef, handler: () => closeModal(id) });
  useKeyPress({ key: "Escape", handler: () => closeModal(id) });

  if (!modalRoot) return null;
  if (!isOpen) {
    return (
      <button className="button primary" onClick={() => openModal(id)}>
        {label}
      </button>
    );
  }

  const modalWrapper = (
    <div className={"modal-wrapper"}>
      <div className="modal" ref={modalRef} id={id}>
        {header && <div className="modal-header">{header}</div>}
        <div className="modal-content">
          {children}
          <div className="modal-actions">
            {action && action}
            <button className="button primary" onClick={() => closeModal(id)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(<ModalProvider>{modalWrapper}</ModalProvider>, modalRoot);
}

export default PopupModal;

import React, { useRef, useContext } from "react";
import { createPortal } from "react-dom";
import useKeyPress from "../../hooks/useKeyPress";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ModalContext } from "../../contexts/ModalContext";
import Button from "./Button";

function PopupModal({
  children,
  header = null,
  action = null,
  id = undefined,
  label = "Open Modal",
  buttonColor = "red",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  closeKey = "Escape",
}) {
  const modalRef = useRef(null);
  const portalRef = useRef(null);
  const { modals, openModal, closeModal } = useContext(ModalContext);
  const isOpen = modals[id] || false;

  useOnClickOutside({
    ref: modalRef,
    handler: closeOnOverlayClick ? () => closeModal(id) : null,
  });
  useKeyPress({ key: closeKey, handler: closeOnEscape ? () => closeModal(id) : null });

  const openButton = (
    <Button color={buttonColor} onClick={() => openModal(id)}>
      {label}
    </Button>
  );

  const modalWindow = (
    <div className={"modal-wrapper"}>
      <div className="modal" ref={modalRef} id={id}>
        {header && <div className="modal-header">{header}</div>}
        <div className="modal-content">
          {children}
          <div className="modal-actions">
            {action && action}
            <button className="button ghost" onClick={() => closeModal(id)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={portalRef}>
      {openButton}
      {isOpen && createPortal(modalWindow, portalRef.current)}
    </div>
  );
}

export default PopupModal;

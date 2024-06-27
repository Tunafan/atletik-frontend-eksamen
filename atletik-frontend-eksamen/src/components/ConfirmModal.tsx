import React from "react";
import "./modal.css";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onConfirm} className="modal-confirm-button">
          Ja
        </button>
        <button onClick={onClose} className="modal-close-button">
          Nej
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;

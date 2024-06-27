import React from "react";
import "./resultsModal.css";

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  athlete: {
    name: string;
    clubName: string;
  } | null;
}

const ResultsModal: React.FC<ResultsModalProps> = ({
  isOpen,
  onClose,
  athlete,
}) => {
  if (!isOpen || !athlete) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{athlete.name}</h2>
        <h4>{athlete.clubName}</h4>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ResultsModal;

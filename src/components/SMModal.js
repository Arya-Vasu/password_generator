import React from 'react';

const SMMModal = ({ onClose, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Content of the modal */}
        <h2>SMM Services for Crypto Projects</h2>
        <p>SMM for crypto projects are marketing solutions that...</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SMMModal;

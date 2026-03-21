import React from "react";
// import "./DeleteModal.css";

const DeleteModal = ({ show, onClose, movieId, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{backgroundColor:"white"}} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">Delete</div>
        <div className="modal-body">
          Are you sure you want to delete?
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-delete" onClick={() => onConfirm(movieId)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
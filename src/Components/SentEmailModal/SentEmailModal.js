import React from "react"

const SentEmailModal = ({ show, onClose }) => {
  return (
    <div
      className={`modal fade ${show ? "d-block" : "d-none"}`}
      id="alertModal"
      tabindex="-1"
      aria-labelledby="alertModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="alertModalLabel">
              Oznámení
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body green" id="modalMessage">
            Email byl úspěšně odeslán😊
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Zavřít
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SentEmailModal

import React from "react"

const SentEmailModal = () => {
  return (
    <div
      class="modal-dialog modal-dialog-centered"
      id="alertModal"
      tabindex="-1"
      aria-labelledby="alertModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
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

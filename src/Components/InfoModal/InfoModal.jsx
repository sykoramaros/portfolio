import React from "react"
import "./InfoModal.css"

const InfoModal = ({ modalTitle, modalText, buttonText, onClose }) => {
  const modalBoxClick = (event) => {
    event.stopPropagation() //zachyti kliknuti a neudela nic
  }



  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box rounded-2" onClick={modalBoxClick}>
          <div className="px-5 pt-3">
            <h1 className="fs-3 text-uppercase text-primary">{modalTitle}</h1>
          </div>
          <hr className="border border-1 border-secondary" />
          <div className="px-5">
            <p className="my-4">{modalText}</p>
          </div>
          <hr className="border border-1 border-secondary" />
          <div className="px-5 pb-3">
            <button className="btn button-secondary px-4" onClick={onClose}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoModal

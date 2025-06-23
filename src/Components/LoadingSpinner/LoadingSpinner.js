import React from "react"

const LoadingSpinner = () => {
  return (
    <>
      {/* <div
        class="spinner-border text-secondary position-absolute start-50"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div> */}
      <img
        src={`${process.env.PUBLIC_URL}/img/loading-spinner.svg`}
        alt="Loading spinner"
      />
    </>
  )
}

export default LoadingSpinner

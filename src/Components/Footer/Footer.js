import React from "react"

const Footer = () => {
  return (
    <div>
      <div
        className="bg-transparent d-flex justify-content-start align-items-end"
        style={{ height: "100px" }}
      >
        <div className="ms-5">
          <p>
            <a href="https://jigsaw.w3.org/css-validator/check/referer">
              <img
                className="opacity-75"
                style={{ border: "0", width: "88px", height: "31px" }}
                src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
                alt="Valid CSS!"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer

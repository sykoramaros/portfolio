import React from "react"

const HobbyCard = ({ rotation, image, title, text, weblink }) => {
  return (
    <div className="col">
      <div
        className="card rounded-5 h-100 position-relative overflow-hidden"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img src={image} class="card-img-top" alt="..." />
        <div className="card-body w-75 rounded-5 bg-white bg-opacity-25 mb-3 position-absolute bottom-0 start-50 translate-middle-x text-white text-center text-shadow">
          <h5 className="card-title fs-3">{title}</h5>
          <p className="card-text fs-6">{text}</p>
          {/* <a
            href={weblink}
            className="btn-link text-decoration-none text-beige fs-6"
            target="_blank"
          >
            Google
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default HobbyCard

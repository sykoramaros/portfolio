import React from "react"
import { useState } from "react"
import "./HobbyCard.css"

const HobbyCard = ({ rotation, image, title, backText, link, textLink }) => {
  const [flipped, setFlipped] = useState(false)
  // Funkce pro přepnutí stavu karty (flip)
  const handleClick = () => setFlipped(!flipped)

  return (
    <div className="col">
      <div className="card-flipper" onClick={handleClick}>
        <div
          className="card rounded-5 h-100 position-relative overflow-hidden shadow-lg"
          style={{ transform: `rotate(${rotation}deg)` }} // uhel vytoceni karty
        >
          <div
            className={`card-inner ${flipped ? "flipped" : ""}`}
            style={{
              transittion: "transform 0.6s",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="card-front">
              <img src={image} class="card-img-top" alt="..." />
            </div>
            <div className="card-back">
              <img
                src="/img/hobbies/white.jpg"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body rounded-5 bg-light bg-opacity-25 position-absolute bottom-0 start-50 translate-middle-x text-shadow d-flex flex-column justify-content-center align-items-center h-100 w-100">
                <h5 className="card-title fs-3 text-center">{title}</h5>
                <p className="card-text fs-6 text-center mx-3">{backText}</p>
                <a
                  className="text-center fs-5 text-decoration-none"
                  href={link}
                  target="_blank"
                >
                  {textLink}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HobbyCard

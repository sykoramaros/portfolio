import React, { useState } from "react"
import "./HobbyCard.css"

const HobbyCardStrapi = ({
  rotation,
  image,
  title,
  backText,
  link,
  textLink,
  imgAlt,
}) => {
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
              transition: "transform 0.6s", // opravený zápis
              transformStyle: "preserve-3d",
            }}
          >
            <div className="card-front">
              <img
                // src={`${process.env.PUBLIC_URL}${image}`}
                src={image}
                className="card-img-top"
                alt={imgAlt}
              />
              {/* opravené class na className */}
            </div>
            <div className="card-back">
              <img
                src={`${process.env.PUBLIC_URL}/img/hobbies/white.jpg`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body rounded-5 bg-light bg-opacity-25 position-absolute bottom-0 start-50 translate-middle-x d-flex flex-column justify-content-center align-items-center h-100 w-100">
                <h5 className="card-title fs-3 text-center text-info fw-bold">
                  {title}
                </h5>
                <p className="card-text fs-4 text-center mx-3">{backText}</p>
                <a
                  className="text-center text-info fs-4 text-decoration-none"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
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

export default HobbyCardStrapi

import React from "react"
import { useState } from "react"

const SkillCard = ({ imageSrc, hoverImageSrc, backText, alternativeText }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isShowed, setIsShowed] = useState(false)

  return (
    <div
      className="mx-auto"
      onMouseEnter={() => setIsShowed(true)}
      onMouseLeave={() => setIsShowed(false)}
    >
      <img
        className="img-thumbnail shadow-sm mx-auto d-block position-relative"
        src={isHovered ? `${imageSrc}` : `${hoverImageSrc}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(true)}
        alt={alternativeText}
        style={{ minWidth: "100px" }}
      />
      {isShowed && (
        <p className="text-center fs-4 text-info text-shadow position-absolute mt-3">
          {backText}
        </p>
      )}
    </div>
  )
}

export default SkillCard

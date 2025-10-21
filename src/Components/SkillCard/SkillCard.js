import React from "react"
import { useState } from "react"

const SkillCard = ({ imageSrc, hoverImageSrc, backText }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isShowed, setIsShowed] = useState(false)

  return (
    <div
      className="col"
      onMouseEnter={() => setIsShowed(true)}
      onMouseLeave={() => setIsShowed(false)}
    >
      <img
        className="img-thumbnail shadow-sm"
        src={
          isHovered
            ? `${import.meta.env.VITE_API_URL}${imageSrc}`
            : `${import.meta.env.VITE_API_URL}${hoverImageSrc}`
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(true)}
        alt="Skill card"
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

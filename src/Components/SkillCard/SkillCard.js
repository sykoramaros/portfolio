import React from "react"
import { useState } from "react"

const SkillCard = ({ imageSrc, hoverImageSrc }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="col">
      <img
        className="img-thumbnail shadow-sm"
        src={isHovered ? imageSrc : hoverImageSrc}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(true)}
      />
    </div>
  )
}

export default SkillCard

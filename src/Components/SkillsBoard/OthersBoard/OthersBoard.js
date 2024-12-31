import React from "react"
import SkillCard from "../../SkillCard/SkillCard.js"
import "./OthersBoard.css"

const OthersBoard = () => {

  const cardsDataSkillsList = [
    {
      imageSrc: "./img/skills/classics/Bl.png",
      hoverImageSrc: "./img/skills/blackwhite/Bl.png",
    }
  ]

  return (
    <div className="container">
      <div className="row display-1 text-center border border-warning bg-warning align-items-center m-auto p-4">
        {cardsDataSkillsList.map((card, index) => (
          <SkillCard
            key={index}
            imageSrc={card.imageSrc}
            hoverImageSrc={card.hoverImageSrc}
          />
        ))}
      </div>
    </div>
  )
}

export default OthersBoard

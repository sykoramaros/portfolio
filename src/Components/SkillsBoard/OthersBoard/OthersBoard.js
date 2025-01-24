import React from "react"
import SkillCard from "../../SkillCard/SkillCard.js"
import "./OthersBoard.css"
import dataSkills from "./data_skills.json"

const OthersBoard = () => {
  return (
    <div className="container">
      <div className="row display-1 text-center border border-warning bg-warning align-items-center m-auto p-4">
        {dataSkills.map((card, index) => (
          <SkillCard
            key={index}
            imageSrc={card.imageSrc}
            hoverImageSrc={card.hoverImageSrc}
            backText={card.backText}
          />
        ))}
      </div>
    </div>
  )
}

export default OthersBoard

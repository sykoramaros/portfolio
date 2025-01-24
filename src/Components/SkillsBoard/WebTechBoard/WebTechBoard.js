import React from "react"
import SkillCard from "../../SkillCard/SkillCard"
import "./WebTechBoard.css"
import dataSkills from "./data_skills.json"

const WebTechBoard = () => {
  return (
    <div className="container">
      <div
        className="row display-1 text-center border border-warning bg-warning rounded-1 align-items-center m-auto p-4"
        style={{ transform: "rotate(1.5deg)" }}
      >
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

export default WebTechBoard

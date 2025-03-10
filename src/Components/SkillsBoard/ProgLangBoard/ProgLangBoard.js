import React from "react"
import "./ProgLangBoard.css"
import SkillCard from "../../SkillCard/SkillCard"
import dataSkills from "./data_skills.json"

const ProgLangBoard = () => {
  return (
    <div className="container">
      <div
        className="row display-1 text-center border border-warning bg-warning-light rounded-1 align-items-center justify-content-center m-auto p-4 shadow-sm"
        style={{ transform: "rotate(-2.5deg)" }}
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

export default ProgLangBoard

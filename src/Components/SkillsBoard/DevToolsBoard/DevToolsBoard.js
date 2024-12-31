import React from "react"
import SkillCard from "../../SkillCard/SkillCard"
import "./DevToolsBoard.css"

const DevToolsBoard = () => {

  const cardsDataSkillsList = [
    {
      imageSrc: "./img/skills/classics/Gi.png",
      hoverImageSrc: "./img/skills/blackwhite/Gi.png",
      backText: "Git",
    },
    {
      imageSrc: "./img/skills/classics/Do.png",
      hoverImageSrc: "./img/skills/blackwhite/Do.png",
      backText: "Docker",
    },
    {
      imageSrc: "./img/skills/classics/Az.png",
      hoverImageSrc: "./img/skills/blackwhite/Az.png",
      backText: "Azure",
    },
  ]

  return (
    <div className="container">
      <div
        className="row display-1 text-center border border-warning bg-warning rounded-1 align-items-center justify-content-center m-auto p-4"
        style={{ transform: "rotate(0.5deg)" }}
      >
        {cardsDataSkillsList.map((card, index) => (
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

export default DevToolsBoard

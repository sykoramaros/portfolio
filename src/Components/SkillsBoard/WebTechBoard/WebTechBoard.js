import React from "react"
import SkillCard from "../../SkillCard/SkillCard"
import "./WebTechBoard.css"
// html css Bootstrap React
const WebTechBoard = () => {
  const cardsDataSkillsList = [
    {
      imageSrc: "./img/skills/classics/Ht.png",
      hoverImageSrc: "./img/skills/blackwhite/Ht.png",
      backText: "HTML",
    },
    {
      imageSrc: "./img/skills/classics/Cs.png",
      hoverImageSrc: "./img/skills/blackwhite/Cs.png",
      backText: "CSS",
    },
    {
      imageSrc: "./img/skills/classics/Bo.png",
      hoverImageSrc: "./img/skills/blackwhite/Bo.png",
      backText: "Bootstrap",
    },
    {
      imageSrc: "./img/skills/classics/Re.png",
      hoverImageSrc: "./img/skills/blackwhite/Re.png",
      backText: "React",
    },
  ]

  return (
    <div className="container">
      <div
        className="row display-1 text-center border border-warning bg-warning rounded-1 align-items-center m-auto p-4"
        style={{ transform: "rotate(1.5deg)" }}
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

export default WebTechBoard

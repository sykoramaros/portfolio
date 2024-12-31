import React from "react"
import "./ProgLangBoard.css"
import SkillCard from "../../SkillCard/SkillCard"
// csharp java javascript
const ProgLangBoard = () => {
  const cardsDataSkillsList = [
    {
      imageSrc: "./img/skills/classics/Cp.png",
      hoverImageSrc: "./img/skills/blackwhite/Cp.png",
    },
    {
      imageSrc: "./img/skills/classics/Ja.png",
      hoverImageSrc: "./img/skills/blackwhite/Ja.png",
    },
    {
      imageSrc: "./img/skills/classics/Js.png",
      hoverImageSrc: "./img/skills/blackwhite/Js.png",
    },
  ]

  return (
    <div className="container">
      <div
        className="row display-1 text-center border border-warning bg-warning rounded-1 align-items-center justify-content-center m-auto p-4"
        style={{ transform: "rotate(-2.5deg)" }}
      >
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

export default ProgLangBoard

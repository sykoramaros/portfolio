import React from "react"
import SkillCard from "../../SkillCard/SkillCard"
// mariadb mysql
const DatabasesBoard = () => {
  const cardsDataSkillsList = [
    {
      imageSrc: "./img/skills/classics/Ma.png",
      hoverImageSrc: "./img/skills/blackwhite/Ma.png",
      backText: "MariaDB",
    },
    {
      imageSrc: "./img/skills/classics/My.png",
      hoverImageSrc: "./img/skills/blackwhite/My.png",
      backText: "MySQL",
    },
  ]

  return (
    <div className="container">
      <div
        className="row display-1 text-center border border-warning bg-warning  align-items-center m-auto p-4"
        style={{ transform: "rotate(-1.5deg)" }}
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

export default DatabasesBoard

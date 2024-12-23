import React from "react"
import { useState } from "react"
import "./ProgLangBoard.css"

const ProgLangBoard = () => {
  const [isHoveredCsharp, setIsHoveredCsharp] = useState(false)
  const [isHoveredJava, setIsHoveredJava] = useState(false)
  const [isHoveredJs, setIsHoveredJs] = useState(false)

  return (
    <div className="container">
      <div
        className="row display-1 text-center border border-warning bg-warning rounded-1 align-items-center justify-content-center m-auto p-4"
        style={{ transform: "rotate(-2.5deg)" }}
      >
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredCsharp
                ? "./img/skills/classics/Cp.png"
                : "./img/skills/blackwhite/Cp.png"
            }
            onMouseEnter={() => setIsHoveredCsharp(true)}
            onMouseLeave={() => setIsHoveredCsharp(true)}
          />
        </div>
        <div className="col">
          <img
            className="img-thumbnail shadow-sm border-dotted"
            src={
              isHoveredJava
                ? "./img/skills/classics/Ja.png"
                : "./img/skills/blackwhite/Ja.png"
            }
            onMouseEnter={() => setIsHoveredJava(true)}
            onMouseLeave={() => setIsHoveredJava(true)}
          />
        </div>
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredJs
                ? "./img/skills/classics/Js.png"
                : "./img/skills/blackwhite/Js.png"
            }
            onMouseEnter={() => setIsHoveredJs(true)}
            onMouseLeave={() => setIsHoveredJs(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default ProgLangBoard

import React from "react"
import { useState } from "react"
import "./WebTechBoard.css"

const WebTechBoard = () => {
  const [isHoveredHtml, setIsHoveredHtml] = useState(false)
  const [isHoveredCss, setIsHoveredCss] = useState(false)
  const [isHoveredBootstrap, setIsHoveredBootstrap] = useState(false)
  const [isHoveredReact, setIsHoveredReact] = useState(false)

  return (
    <div className="container">
      <h1>WebTechBoard</h1>
      <div
        className="row display-1 text-center border border-warning bg-warning rounded-1 align-items-center m-auto p-4"
        style={{ transform: "rotate(1.5deg)" }}
      >
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredHtml
                ? "./img/skills/classics/Ht.png"
                : "./img/skills/blackwhite/Ht.png"
            }
            onMouseEnter={() => setIsHoveredHtml(true)}
            onMouseLeave={() => setIsHoveredHtml(true)}
          />
        </div>
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredCss
                ? "./img/skills/classics/Cs.png"
                : "./img/skills/blackwhite/Cs.png"
            }
            onMouseEnter={() => setIsHoveredCss(true)}
            onMouseLeave={() => setIsHoveredCss(true)}
          />
        </div>
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredBootstrap
                ? "./img/skills/classics/Bo.png"
                : "./img/skills/blackwhite/Bo.png"
            }
            onMouseEnter={() => setIsHoveredBootstrap(true)}
            onMouseLeave={() => setIsHoveredBootstrap(true)}
          />
        </div>
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredReact
                ? "./img/skills/classics/Re.png"
                : "./img/skills/blackwhite/Re.png"
            }
            onMouseEnter={() => setIsHoveredReact(true)}
            onMouseLeave={() => setIsHoveredReact(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default WebTechBoard

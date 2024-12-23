import React from "react"
import { useState } from "react"
import "./OthersBoard.css"

const OthersBoard = () => {
  const [isHoveredBlender, setIsHoveredBlender] = useState(false)

  return (
    <div className="container">
      <h1>OthersBoard</h1>
      <div
        className="row display-1 text-center border border-warning bg-warning align-items-center m-auto p-4"
        style={{ transform: "rotate(-0.5deg)" }}
      >
        <div className="col">
          {" "}
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredBlender
                ? "./img/skills/classics/Bl.png"
                : "./img/skills/blackwhite/Bl.png"
            }
            onMouseEnter={() => setIsHoveredBlender(true)}
            onMouseLeave={() => setIsHoveredBlender(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default OthersBoard

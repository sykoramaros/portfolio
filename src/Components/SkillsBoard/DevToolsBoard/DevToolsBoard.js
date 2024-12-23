import React from "react"
import { useState } from "react"
import "./DevToolsBoard.css"

const DevToolsBoard = () => {
  const [isHoveredGit, setIsHoveredGit] = useState(false)
  const [isHoveredDocker, setIsHoveredDocker] = useState(false)
  const [isHoveredAzure, setIsHoveredAzure] = useState(false)

  return (
    <div className="container">
      <div
        className="row display-1 text-center border border-warning bg-warning rounded-1 align-items-center justify-content-center m-auto p-4"
        style={{ transform: "rotate(0.5deg)" }}
      >
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredGit
                ? "./img/skills/classics/Gi.png"
                : "./img/skills/blackwhite/Gi.png"
            }
            onMouseEnter={() => setIsHoveredGit(true)}
            onMouseLeave={() => setIsHoveredGit(true)}
          />
        </div>
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredDocker
                ? "./img/skills/classics/Do.png"
                : "./img/skills/blackwhite/Do.png"
            }
            onMouseEnter={() => setIsHoveredDocker(true)}
            onMouseLeave={() => setIsHoveredDocker(true)}
          />
        </div>
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredAzure
                ? "./img/skills/classics/Az.png"
                : "./img/skills/blackwhite/Az.png"
            }
            onMouseEnter={() => setIsHoveredAzure(true)}
            onMouseLeave={() => setIsHoveredAzure(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default DevToolsBoard

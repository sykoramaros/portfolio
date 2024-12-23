import React from "react"
import { useState } from "react"

const DatabasesBoard = () => {
  const [isHoveredMariadb, setIsHoveredMariadb] = useState(false)
  const [isHoveredMysql, setIsHoveredMysql] = useState(false)

  return (
    <div className="container">
      <h1>DatabasesBoard</h1>
      <div
        className="row display-1 text-center border border-warning bg-warning  align-items-center m-auto p-4"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredMariadb
                ? "./img/skills/classics/Ma.png"
                : "./img/skills/blackwhite/Ma.png"
            }
            onMouseEnter={() => setIsHoveredMariadb(true)}
            onMouseLeave={() => setIsHoveredMariadb(true)}
          />
        </div>
        <div className="col">
          <img
            className="img-thumbnail shadow-sm"
            src={
              isHoveredMysql
                ? "./img/skills/classics/My.png"
                : "./img/skills/blackwhite/My.png"
            }
            onMouseEnter={() => setIsHoveredMysql(true)}
            onMouseLeave={() => setIsHoveredMysql(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default DatabasesBoard

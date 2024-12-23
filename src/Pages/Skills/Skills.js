import React from "react"
import ProgLangBoard from "../../Components/SkillsBoard/ProgLangBoard/ProgLangBoard"
import WebTechBoard from "../../Components/SkillsBoard/WebTechBoard/WebTechBoard"
import DevToolsBoard from "../../Components/SkillsBoard/DevToolsBoard/DevToolsBoard"
import DatabasesBoard from "../../Components/SkillsBoard/DatabasesBoard/DatabasesBoard"
import OthersBoard from "../../Components/SkillsBoard/OthersBoard/OthersBoard"

const Skills = () => {
  return (
    <div>
      <div className="container">
        <h1 className="mt-4">Znalosti</h1>
        <p>Efekt zobrazeni ikonek znalosti</p>

        <div className="row gy-5 gx-0">
          <div className="col-lg-6">
            <ProgLangBoard />
          </div>
          <div className="col-lg-6">
            <WebTechBoard />
          </div>
          <div className="col-lg-6 w-auto">
            <DevToolsBoard />
          </div>
          <div className="col-lg-6 w-auto">
            <DatabasesBoard />
          </div>
          <div className="col-lg-6 w-auto">
            <OthersBoard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

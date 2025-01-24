import React from "react"
import { Trans } from "@lingui/react"
import "./Skills.css"
import ProgLangBoard from "../../Components/SkillsBoard/ProgLangBoard/ProgLangBoard"
import WebTechBoard from "../../Components/SkillsBoard/WebTechBoard/WebTechBoard"
import DevToolsBoard from "../../Components/SkillsBoard/DevToolsBoard/DevToolsBoard"
import DatabasesBoard from "../../Components/SkillsBoard/DatabasesBoard/DatabasesBoard"
import OthersBoard from "../../Components/SkillsBoard/OthersBoard/OthersBoard"

const Skills = () => {
  return (
    <div>
      <div className="container">
        <h1 className="display-3 mt-5 text-center text-primary text-shadow">
          <Trans id="skills.h1">skills.title</Trans>
        </h1>
        <div className="row gy-5 gx-0 mt-2">
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <ProgLangBoard />
            <img
              className="img-fluid pin-fixed-size"
              src="./img/skills/decorations/right_blue_pin.png"
              alt="Right blue pin"
            />
          </div>
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <WebTechBoard />
            <img
              className="img-fluid pin-fixed-size"
              src="./img/skills/decorations/left_red_pin.png"
              alt="Lef red pin"
            />
          </div>
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <DevToolsBoard />
            <img
              className="img-fluid pin-fixed-size"
              src="./img/skills/decorations/right_green_pin.png"
              alt="Right green pin"
            />
          </div>
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <DatabasesBoard />
            <img
              className="img-fluid pin-fixed-size"
              src="./img/skills/decorations/right_yellow_pin.png"
              alt="Right yellow pin"
            />
          </div>
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <OthersBoard />
            <img
              className="img-fluid pin-fixed-size"
              src="./img/skills/decorations/right_blue_pin.png"
              alt="Right blue pin"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

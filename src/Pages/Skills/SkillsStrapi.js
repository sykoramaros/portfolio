import React from "react"
import "./Skills.css"
import ProgLangBoardStrapi from "../../Components/SkillsBoard/ProgLangBoard/ProgLangBoardStrapi"
import WebTechBoardStrapi from "../../Components/SkillsBoard/WebTechBoard/WebTechBoardStrapi"
import DevToolsBoardStrapi from "../../Components/SkillsBoard/DevToolsBoard/DevToolsBoardStrapi"
import DatabasesBoardStrapi from "../../Components/SkillsBoard/DatabasesBoard/DatabasesBoardStrapi"
import OthersBoardStrapi from "../../Components/SkillsBoard/OthersBoard/OthersBoardStrapi"

const SkillsStrapi = () => {
  return (
    <div>
      <div className="">
        <h1 className="display-3 mt-5 text-center text-primary text-shadow">
          {/* <Trans id="skills.h1">skills.title</Trans> */}
        </h1>
        <div className="row gy-5 gx-0 mt-2">
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <ProgLangBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${process.env.PUBLIC_URL}/img/skills/decorations/right_blue_pin.png`}
              alt="Right blue pin"
            />
          </div>
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <WebTechBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${process.env.PUBLIC_URL}/img/skills/decorations/left_red_pin.png`}
              alt="Lef red pin"
            />
          </div>
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <DevToolsBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${process.env.PUBLIC_URL}/img/skills/decorations/right_green_pin.png`}
              alt="Right green pin"
            />
          </div>
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <DatabasesBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${process.env.PUBLIC_URL}/img/skills/decorations/right_yellow_pin.png`}
              alt="Right yellow pin"
            />
          </div>
          <div className="col-lg-6 w-auto" style={{ position: "relative" }}>
            <OthersBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${process.env.PUBLIC_URL}/img/skills/decorations/right_blue_pin.png`}
              alt="Right blue pin"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsStrapi

import "./Skills.css"
import ProgLangBoardStrapi from "../../components/SkillsBoard/ProgLangBoard/ProgLangBoardStrapi"
import WebTechBoardStrapi from "../../components/SkillsBoard/WebTechBoard/WebTechBoardStrapi"
import DevToolsBoardStrapi from "../../components/SkillsBoard/DevToolsBoard/DevToolsBoardStrapi"
import DatabasesBoardStrapi from "../../components/SkillsBoard/DatabasesBoard/DatabasesBoardStrapi"
import OthersBoardStrapi from "../../components/SkillsBoard/OthersBoard/OthersBoardStrapi"

const SkillsStrapi = () => {
  return (
    <div>
      <div className="">
        <h1 className="display-3 mt-5 text-center text-primary text-shadow">
          Skills
        </h1>
        <div className="row gap-4 mt-5">
          <div className="w-auto" style={{ position: "relative" }}>
            <ProgLangBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${
                import.meta.env.VITE_API_URL
              }/img/skills/decorations/right_blue_pin.png`}
              alt="Right blue pin"
            />
          </div>
          <div className="w-auto" style={{ position: "relative" }}>
            <WebTechBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${
                import.meta.env.VITE_API_URL
              }/img/skills/decorations/left_red_pin.png`}
              alt="Lef red pin"
            />
          </div>
          <div className="w-auto" style={{ position: "relative" }}>
            <DevToolsBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${
                import.meta.env.VITE_API_URL
              }/img/skills/decorations/right_green_pin.png`}
              alt="Right green pin"
            />
          </div>
          <div className="w-auto" style={{ position: "relative" }}>
            <DatabasesBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${
                import.meta.env.VITE_API_URL
              }/img/skills/decorations/right_yellow_pin.png`}
              alt="Right yellow pin"
            />
          </div>
          <div className="w-auto" style={{ position: "relative" }}>
            <OthersBoardStrapi />
            <img
              className="img-fluid pin-fixed-size"
              src={`${
                import.meta.env.VITE_API_URL
              }/img/skills/decorations/right_blue_pin.png`}
              alt="Right blue pin"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsStrapi

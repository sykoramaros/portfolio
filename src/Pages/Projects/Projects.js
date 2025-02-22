import React from "react"
import { useState } from "react"
import { Trans, useLingui } from "@lingui/react"
import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import enFrontendProjects from "../../locales/en/frontend_projects.json"
import csFrontendProjects from "../../locales/cs/frontend_projects.json"
import mnFrontendProjects from "../../locales/mn/frontend_projects.json"
import enBackendProjects from "../../locales/en/backend_projects.json"
import csBackendProjects from "../../locales/cs/backend_projects.json"
import mnBackendProjects from "../../locales/mn/backend_projects.json"

const Projects = () => {
  const [isFrontendListVisible, setIsFrontendListVisible] = useState(true)
  const { i18n } = useLingui() // Používáme aktuální jazyk z i18n

  const frontendProjectsData =
    i18n.locale === "en"
      ? enFrontendProjects
      : i18n.locale === "mn"
      ? mnFrontendProjects
      : csFrontendProjects
  const backendProjectsData =
    i18n.locale === "en"
      ? enBackendProjects
      : i18n.locale === "mn"
      ? mnBackendProjects
      : csBackendProjects

  return (
    <div className="container">
      <h1 className="display-3 mt-5 text-center text-primary text-shadow">
        <Trans id="projects.h1" />
      </h1>
      <div className="row align-items-center justify-content-center mt-4">
        <span
          className={
            isFrontendListVisible
              ? "fs-2 fs-md-1 col-auto text-center fw-bold text-info"
              : "fs-2 fs-md-1 col-auto text-center"
          }
          onClick={() => setIsFrontendListVisible(!isFrontendListVisible)}
          style={{ cursor: "pointer" }}
        >
          Frontend
        </span>
        <img
          className="switch-button"
          src={
            isFrontendListVisible
              ? `${process.env.PUBLIC_URL}/img/projects/decorations/switch_off.png`
              : `${process.env.PUBLIC_URL}/img/projects/decorations/switch_on.png`
          }
          onClick={() => setIsFrontendListVisible(!isFrontendListVisible)}
          alt={"switch"}
          style={{ cursor: "pointer" }}
        />
        <span
          className={
            isFrontendListVisible
              ? "fs-2 fs-sm-1 col-auto text-center"
              : "fs-2 fs-sm-1 col-auto text-center fw-bold text-info"
          }
          onClick={() => setIsFrontendListVisible(!isFrontendListVisible)}
          style={{ cursor: "pointer" }}
        >
          Backend
        </span>
      </div>
      <hr className="w-75 mx-auto mt-4 border-muted" />
      <br />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        {(isFrontendListVisible
          ? frontendProjectsData
          : backendProjectsData
        ).map((card, index) => (
          <ProjectCard
            key={index}
            webLink={card.webLink}
            image={card.image}
            title={card.title}
            text={card.text}
            technologies={card.technologies}
            githubLink={card.githubLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects

import React from "react"
import { Trans } from "@lingui/react"
import "./ProjectCard.css"

const ProjectCard = ({
  webLink,
  image,
  title,
  text,
  technologies,
  githubLink,
}) => {
  return (
    <div>
      <div className="col shadow-sm">
        {/* Hlavní odkaz pro kartu */}
        <a
          href={webLink}
          className="text-decoration-none"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="card h-100" style={{ position: "relative" }}>
            <img
              className="img-fluid top-paper-tape"
              src="./img/projects/decorations/paper_tape.png"
              alt="Paper tape"
            />

            <img
              className="img-fluid bottom-paper-tape"
              src="./img/projects/decorations/paper_tape.png"
              alt="Paper tape"
            />

            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-info fs-3">{title}</h5>
              <p className="card-text text-muted">{text}</p>
              <div className="card-footer">
                <p className="card-text text-secondary">
                  <Trans id="project_card.p1" />{" "}
                  <span className="text-success">{technologies}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
        {/* Odkaz na GitHub mimo hlavní kartu */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img
            className="img-fluid github-sticker"
            src="./img/projects/decorations/github_sticker.png"
            alt="GitHub"
          />
        </a>
      </div>
      <br className="my-5" />
    </div>
  )
}

export default ProjectCard

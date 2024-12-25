import React from "react"
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
        <a href={webLink} className="text-decoration-none" target="_blank">
          <div className="card h-100" style={{ position: "relative" }}>
            <img
              className="img-fluid top-paper-tape"
              src="./img/projects/decorations/paper_tape.png"
            />

            <img
              className="img-fluid bottom-paper-tape"
              src="./img/projects/decorations/paper_tape.png"
            />

            <a href={githubLink}>
              <img
                className="img-fluid github-sticker"
                src="./img/projects/decorations/github_sticker.png"
              />
            </a>
            <img src={image} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-info fs-3">{title}</h5>
              <p className="card-text text-muted">{text}</p>
              <div className="card-footer">
                <p className="card-text text-secondary">
                  Vytvořeno pomocí:{" "}
                  <span className="text-success">{technologies}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <br className="my-5" />
    </div>
  )
}

export default ProjectCard

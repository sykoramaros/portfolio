import React from "react"
import "./ProjectCard.css"
import { useBaseUrl } from "../../context/BaseUrlProvider"

const ProjectCardStrapi = ({
  webLink,
  image,
  title,
  text,
  technologies,
  githubImage,
  githubLink,
}) => {
  const BASE_URL = useBaseUrl()

  return (
    <div>
      <div className="col shadow-sm" style={{ position: "relative" }}>
        {/* Hlavní odkaz pro kartu */}
        <a
          href={webLink}
          className="text-decoration-none"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="card h-100">
            {/*<img*/}
            {/*  className="img-fluid top-paper-tape"*/}
            {/*  src={`${process.env.PUBLIC_URL}/img/projects/decorations/paper_tape.png`}*/}
            {/*  alt="Paper tape"*/}
            {/*/>*/}

            {/*<img*/}
            {/*  className="img-fluid bottom-paper-tape"*/}
            {/*  src={`${process.env.PUBLIC_URL}/img/projects/decorations/paper_tape.png`}*/}
            {/*  alt="Paper tape"*/}
            {/*/>*/}

            <img
              src={`${BASE_URL}${image.url}`}
              className="card-img-top"
              alt={image.alternativeText}
            />
            <div className="card-body">
              <h5 className="card-title text-info fs-3">{title}</h5>
              <p className="card-text text-muted">{text}</p>
              <div className="card-footer">
                <p className="card-text text-secondary">
                  {/* <Trans id="project_card.p1" />{" "} */}
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
            src={`${BASE_URL}${githubImage?.url}`}
            alt={githubImage?.alternativeText}
          />
        </a>
      </div>
      <br className="my-5" />
    </div>
  )
}

export default ProjectCardStrapi

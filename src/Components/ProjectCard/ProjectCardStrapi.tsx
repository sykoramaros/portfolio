import { useState } from "react"
import "./ProjectCard.css"
import { useBaseUrl } from "../../providers/BaseUrlProvider"

const ProjectCardStrapi = ({
  webLink,
  image,
  title,
  text,
  technologies,
  githubImage,
  githubLink,
  isUnderConstruction,
  underConstructionImage,
  isSchoolProject,
  schoolProjectImage,
  bubleImage,
  bubleText,
}) => {
  const BASE_URL = useBaseUrl()
  const [showBubble, setShowBubble] = useState(false)

  return (
    <div>
      <div
        className="col shadow-sm"
        style={{ position: "relative", opacity: isUnderConstruction ? 0.5 : 1 }}
      >
        {/* Hlavní odkaz pro kartu */}
        <a
          href={webLink}
          className="text-decoration-none"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="card h-100 ">
      

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
        {/* IsSchoolProjectImage */}
        {isSchoolProject && (
          <div
            className="school-project-container"
            onMouseEnter={() => setShowBubble(true)}
            onMouseLeave={() => setShowBubble(false)}
          >
            <img
              className="img-fluid school-project"
              style={{ transform: "scaleX(-1)" }}
              src={`${BASE_URL}${schoolProjectImage?.url}`}
              alt={schoolProjectImage?.alternativeText}
            />
          </div>
        )}
        {showBubble && (
          <div className="buble-container">
            <img
              className="img-fluid"
              src={`${BASE_URL}${bubleImage?.url}`}
              alt={bubleImage?.alternativeText}
            />
            <span className="buble-text text-center fs-4">{bubleText}</span>
          </div>
        )}
        {/* IsUnderConstructionImage */}
        {isUnderConstruction && (
          <img
            className="img-fluid under-construction"
            src={`${BASE_URL}${underConstructionImage?.url}`}
            alt={underConstructionImage?.alternativeText}
          />
        )}
      </div>
      <br className="my-5" />
    </div>
  )
}

export default ProjectCardStrapi

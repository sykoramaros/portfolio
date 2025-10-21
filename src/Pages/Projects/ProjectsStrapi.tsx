import { useState } from "react"
import ProjectCardStrapi from "../../components/ProjectCard/ProjectCardStrapi"
import { useQuery, gql } from "@apollo/client"
import { useBaseUrl } from "../../providers/BaseUrlProvider"
import { useLanguage } from "../../providers/LanguageProvider"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

const PROJECTS = gql`
  query GetProjects($locale: I18NLocaleCode!) {
    projectsPage(locale: $locale) {
      documentId
      title
      frontendText
      backendText
      buttonOn {
        url
        alternativeText
      }
      buttonOff {
        url
        alternativeText
      }
      githubImage {
        url
        alternativeText
      }
      underConstructionImage {
        url
        alternativeText
      }
      schoolProjectImage {
        url
        alternativeText
      }
      bubleImage {
        url
        alternativeText
      }
      bubleText
    }
    frontendProject(locale: $locale) {
      documentId
      ProjectCard {
        webLink
        image {
          url
          alternativeText
        }
        title
        text
        technologies
        githubLink
        isUnderConstruction
      }
      ProjectCard {
        isSchoolProject
      }
    }
    backendProject(locale: $locale) {
      documentId
      ProjectCard {
        webLink
        image {
          url
          alternativeText
        }
        title
        text
        technologies
        githubLink
        isUnderConstruction
      }
      ProjectCard {
        isSchoolProject
      }
    }
  }
`

const ProjectsStrapi = () => {
  const [isFrontendListVisible, setIsFrontendListVisible] = useState(true)
  const BASE_URL = useBaseUrl()
  const { currentLocale } = useLanguage()

  const { loading, error, data } = useQuery(PROJECTS, {
    variables: {
      locale: currentLocale,
    },
  })

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error :(</p>

  return (
    <div className="">
      <h1 className="display-3 mt-5 text-center text-primary text-shadow">
        {data.projectsPage.title}
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
              ? `${BASE_URL}${data.projectsPage.buttonOff.url}`
              : `${BASE_URL}${data.projectsPage.buttonOn.url}`
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
          // alt="switch"
          style={{ cursor: "pointer" }}
        >
          Backend
        </span>
      </div>
      <hr className="w-75 mx-auto mt-4 border-muted" />
      <br />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {(isFrontendListVisible
          ? data.frontendProject.ProjectCard
          : data.backendProject.ProjectCard
        ).map((inside, index) => (
          <ProjectCardStrapi
            key={inside.documentId || index}
            webLink={inside.webLink}
            image={inside.image}
            title={inside.title}
            text={inside.text}
            technologies={inside.technologies}
            githubImage={data.projectsPage.githubImage}
            githubLink={inside.githubLink}
            isUnderConstruction={inside.isUnderConstruction}
            underConstructionImage={data.projectsPage.underConstructionImage}
            isSchoolProject={inside.isSchoolProject}
            schoolProjectImage={data.projectsPage.schoolProjectImage}
            bubleImage={data.projectsPage.bubleImage}
            bubleText={data.projectsPage.bubleText}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsStrapi

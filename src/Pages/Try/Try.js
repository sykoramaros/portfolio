import React from "react"
import { useState } from "react"
import { Trans, useLingui } from "@lingui/react"
import ProjectCard from "../../Components/ProjectCard/ProjectCard"
import enFrontendProjects from "../../locales/en/frontend_projects.json"
import csFrontendProjects from "../../locales/cs/frontend_projects.json"
import enBackendProjects from "../../locales/en/backend_projects.json"
import csBackendProjects from "../../locales/cs/backend_projects.json"

import HobbyCard from "../../Components/HobbyCard/HobbyCard"

import { useQuery, gql } from "@apollo/client"
import { useParams, Link } from "react-router-dom"
import { useBaseUrl } from "../../context/BaseUrlProvider"

const HOBBIES = gql`
  query GetHobbies {
    hobbies {
      documentId
      rotation
      title
      backText
      link
      textLink
      image {
        url
        alternativeText
      }
    }
  }
`

const Try = () => {
  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()

  const { loading, error, data } = useQuery(HOBBIES, {
    variables: {
      documentId,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <>
      <img
        src={`${BASE_URL}${data.hobbies[0].image.url}`}
        alt={data.hobbies[0].image.alternativeText}
        style={{ width: "300px", height: "auto", border: "1px solid red" }}
      />
      <img
        src="http:/192.168.100.9:1341/uploads/hobbies/friends_circle_a36d778436.jpeg"
        alt="test"
      />
      <p>{BASE_URL + data.hobbies[0].image.url}</p>
      <div className="container">
        <h1 className="display-3 mt-5 text-center text-primary text-shadow">
          <Trans id="hobbies.h1" />
        </h1>
        <br />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 mt-1">
          {data.hobbies.map((inside) => (
            <HobbyCard
              key={inside.documentId}
              rotation={inside.rotation}
              image={`${BASE_URL}${inside.image.url}`}
              imageAlt={inside.image.alternativeText}
              title={inside.title}
              backText={inside.backText}
              link={inside.link}
              textLink={inside.textLink}
            />
          ))}
        </div>

        {/* <h1 className="display-3 mt-5 text-center text-primary text-shadow">
          <Trans id="projects.h1" />
        </h1>
        <div className="row align-items-center justify-content-center mt-4">
          <span
            className={
              isFrontendListVisible
                ? "fs-2 fs-md-1 col-auto text-center fw-bold"
                : "fs-2 fs-md-1 col-auto text-center"
            }
          >
            Frontend
          </span>
          <img
            className="switch-button"
            src={
              isFrontendListVisible
                ? "./img/projects/decorations/switch_off.png"
                : "./img/projects/decorations/switch_on.png"
            }
            onClick={() => setIsFrontendListVisible(!isFrontendListVisible)}
            alt={"switch"}
            style={{ cursor: "pointer" }}
          />
          <span
            className={
              isFrontendListVisible
                ? "fs-2 fs-sm-1 col-auto text-center"
                : "fs-2 fs-sm-1 col-auto text-center fw-bold"
            }
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
        </div> */}
      </div>
    </>
  )
}

export default Try

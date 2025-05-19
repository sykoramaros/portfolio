import React from "react"
import SkillCardStrapi from "../../SkillCard/SkillCardStrapi"
import "./DevToolsBoard.css"

import { useQuery, gql } from "@apollo/client"
import { useParams, Link } from "react-router-dom"
import { useBaseUrl } from "../../../context/BaseUrlProvider"

const SKILLS = gql`
  query GetSkills {
    skillsBoards {
      documentId
      SkillCard {
        backText
        imageSrc {
          url
          alternativeText
        }
        hoverImageSrc {
          url
          alternativeText
        }
      }
    }
  }
`

const DevToolsBoardStrapi = () => {
  const BASE_URL = useBaseUrl()
  const { id } = useParams()

  const { loading, error, data } = useQuery(SKILLS, {
    variables: {
      id,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div className="container">
      <div
        className="row display-1 text-center border border-warning bg-warning-light rounded-1 align-items-center justify-content-center m-auto p-4 shadow-sm"
        style={{ transform: "rotate(0.5deg)" }}
      >
        {data.skillsBoards[0] &&
          data.skillsBoards[0].SkillCard.map((card) => (
            <SkillCardStrapi
              key={card.id}
              imageSrc={`${BASE_URL}${card.imageSrc.url}`}
              hoverImageSrc={`${BASE_URL}${card.hoverImageSrc.url}`}
              backText={card.backText}
              alternativeText={card.imageSrc.alternativeText}
            />
          ))}
      </div>
    </div>
  )
}

export default DevToolsBoardStrapi

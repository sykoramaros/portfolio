import React from "react"
import SkillCardStrapi from "../../SkillCard/SkillCardStrapi"
import "./OthersBoard.css"
import dataSkills from "./data_skills.json"

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

const OthersBoardStrapi = () => {
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
      <div className="row display-1 text-center border border-warning bg-warning-light align-items-center m-auto p-4 shadow-sm">
        {data.skillsBoards[2] &&
          data.skillsBoards[2].SkillCard.map((card) => (
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

export default OthersBoardStrapi

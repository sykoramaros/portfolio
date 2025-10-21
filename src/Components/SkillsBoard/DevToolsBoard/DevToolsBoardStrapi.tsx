import React from "react"
import SkillCardStrapi from "../../SkillCard/SkillCardStrapi"
import "./DevToolsBoard.css"

import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"
import { useBaseUrl } from "../../../providers/BaseUrlProvider"

import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner"

const SKILLS = gql`
  query GetSkills {
    devToolsBoard {
      documentId
      SkillCard {
        BackText
        ClassicImage {
          url
          alternativeText
        }
        HoverImage {
          url
          alternativeText
        }
      }
    }
  }
`
const DevToolsBoardStrapi = () => {
  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()

  const { loading, error, data } = useQuery(SKILLS, {
    variables: {
      documentId,
    },
  })

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div className="">
      {/* <p>Back Text: {data.documentId}</p> */}
      <div
        className="d-flex flex-wrap gap-4 p-4 border border-warning bg-warning-light justify-content-center align-items-center m-auto shadow-sm"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        {data.devToolsBoard.SkillCard.map((card) => (
          <SkillCardStrapi
            key={card.id}
            imageSrc={`${BASE_URL}${card.ClassicImage.url}`}
            hoverImageSrc={`${BASE_URL}${card.HoverImage.url}`}
            backText={card.BackText}
            alternativeText={card.ClassicImage.alternativeText}
          />
        ))}
      </div>
    </div>
  )
}

export default DevToolsBoardStrapi

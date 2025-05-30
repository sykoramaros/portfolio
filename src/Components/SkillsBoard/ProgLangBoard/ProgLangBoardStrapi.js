import React from "react"
import "./ProgLangBoard.css"
import SkillCardStrapi from "../../SkillCard/SkillCardStrapi"

import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"
import { useBaseUrl } from "../../../context/BaseUrlProvider"

const SKILLS = gql`
  query GetSkills {
    progLangBoard {
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

const ProgLangBoardStrapi = () => {
  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()

  const { loading, error, data } = useQuery(SKILLS, {
    variables: {
      documentId,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <div className="container">
      {/* <p>Back Text: {data.documentId}</p> */}
      <div
        className="row display-1 text-center border border-warning bg-warning-light  align-items-center m-auto p-4 shadow-sm"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        {data.progLangBoard.SkillCard.map((card) => (
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

export default ProgLangBoardStrapi

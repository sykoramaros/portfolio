import SkillCardStrapi from "../../SkillCard/SkillCardStrapi"
import "./DatabasesBoard.css"

import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"
import { useBaseUrl } from "../../../providers/BaseUrlProvider"

import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner"

const SKILLS = gql`
  query GetSkills {
    databasesBoard {
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
const DatabasesBoardStrapi = () => {
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
      <div
        className="d-flex flex-wrap gap-4 p-4 border border-warning bg-warning-light justify-content-evenly align-items-center m-auto shadow-sm"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        {data.databasesBoard.SkillCard.map((card) => (
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

export default DatabasesBoardStrapi

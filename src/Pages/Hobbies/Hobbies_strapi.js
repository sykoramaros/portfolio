import React from "react"
import { Trans, useLingui } from "@lingui/react"
import HobbyCard from "../../Components/HobbyCard/HobbyCard"

import enHobbiesData from "../../locales/en/hobbies.json"
import csHobbiesData from "../../locales/cs/hobbies.json"
import mnHobbiesData from "../../locales/mn/hobbies.json"

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

const Hobbies = () => {
  const { i18n } = useLingui()
  const currentLanguage = i18n.locale
  const hobbiesData =
    currentLanguage === "en"
      ? enHobbiesData
      : i18n.locale === "mn"
      ? mnHobbiesData
      : csHobbiesData

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
            title={inside.title}
            backText={inside.backText}
            link={inside.link}
            textLink={inside.textLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Hobbies

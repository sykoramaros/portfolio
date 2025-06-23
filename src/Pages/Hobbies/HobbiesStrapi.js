import React from "react"

import HobbyCardStrapi from "../../Components/HobbyCard/HobbyCardStrapi"

import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"
import { useBaseUrl } from "../../context/BaseUrlProvider"
import { useLanguage } from "../../context/LanguageProvider"

import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner"

const HOBBIES = gql`
  query GetHobbies($locale: I18NLocaleCode!) {
    hobbiesList(locale: $locale) {
      documentId
      hobbyCard {
        rotation
        image {
          url
          alternativeText
        }
        title
        backText
        link
        textLink
      }
    }
  }
`

const HobbiesStrapi = () => {
  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()
  const { currentLocale } = useLanguage()

  const { loading, error, data } = useQuery(HOBBIES, {
    variables: {
      documentId,
      locale: currentLocale,
    },
  })

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error :(</p>

  // console.log(data)

  return (
    <div className="">
      <h1 className="display-3 mt-5 text-center text-primary text-shadow">
        {/* <Trans id="hobbies.h1" /> */}
      </h1>
      <br />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 mt-1">
        {data.hobbiesList.hobbyCard.map((inside) => (
          <HobbyCardStrapi
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

export default HobbiesStrapi

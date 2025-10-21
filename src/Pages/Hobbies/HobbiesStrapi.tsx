import HobbyCardStrapi from "../../components/HobbyCard/HobbyCardStrapi"

import { useQuery, gql } from "@apollo/client"
import { useBaseUrl } from "../../providers/BaseUrlProvider"
import { useLanguage } from "../../providers/LanguageProvider"

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

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
  const { currentLocale } = useLanguage()

  const { loading, error, data } = useQuery(HOBBIES, {
    variables: {
      locale: currentLocale,
    },
  })

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error :(</p>

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
            imgAlt={inside.image.alternativeText}
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

import React from "react"
import { Link } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"
import { useBaseUrl } from "../../providers/BaseUrlProvider"
import { useParams } from "react-router-dom"
import { useLanguage } from "../../providers/LanguageProvider"

const LANGUAGE_SWITCHER = gql`
  query LanguageSwitcherQuery {
    languageSwitcher {
      documentId
      langImage {
        lang
        langImage {
          url
          alternativeText
        }
      }
    }
  }
`

const LanguageSwitcher = () => {
  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()
  const { currentLocale, setCurrentLocale, availableLanguages } = useLanguage()

  const { loading, error, data } = useQuery(LANGUAGE_SWITCHER, {
    // variables: {
    //   locale: currentLocale,
    // },
    fetchPolicy: "no-cache",
    documentId,
  })

  // console.log(data)

  // const handleLanguageChange = (e, newLocale) => {
  //   e.preventDefault()
  //   setCurrentLocale(newLocale)
  // }

  if (loading) return <div>Loading...</div>
  if (error) return null

  return (
    <>
      <ul className="my-auto row row-cols-3 g-2" style={{ listStyle: "none" }}>
        {data?.languageSwitcher?.langImage?.map((item, index) => (
          <li key={index}>
            <Link onClick={() => setCurrentLocale(item.lang)}>
              <img
                className="border rounded-5 shadow-sm"
                src={`${BASE_URL}${item.langImage.url}`}
                alt={item.langImage.alternativeText}
                width="35"
                height="auto"
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* <p>{data.languageSwitcher.documentId}</p>
      <ul className="my-auto row row-cols-3 g-2" style={{ listStyle: "none" }}>
        {availableLanguages.map((languages) => (
          <li key={languages}>
            <Link onClick={() => setCurrentLocale(languages)}>{languages}</Link>
          </li>
        ))}
      </ul> */}

      {/* <ul className="my-auto row row-cols-3 g-2" style={{ listStyle: "none" }}>
        {availableLanguages.map((item, index) => (
          <li key={item.lang} className="my-auto">
            <Link
              href="#"
              onClick={(e) => handleLanguageChange(e, item.lang)}
              // aria-label={`Switch to ${item.lang} language`}
            >
              <img
                className={`border rounded-5 shadow-sm`}
                src={`${BASE_URL}${item.langImage.url}`}
                alt={item.langImage.alternativeText}
                width="35"
                height="auto"
              />
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  )
}

export default LanguageSwitcher

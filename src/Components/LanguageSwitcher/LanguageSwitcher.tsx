import { useQuery, gql } from "@apollo/client"
import { useBaseUrl } from "../../providers/BaseUrlProvider"
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
// interface LangImageItem {
//   lang: string
//   langImage: {
//     url: string
//     alternativeText: string
//   }
// }

// interface LanguageSwitcherData {
//   documentId: string
//   langImage: LangImageItem[]
// }
interface LanguageContextType {
  currentLocale: string
  setCurrentLocale: (locale: string) => void
  availableLanguages?: string[]
}

const LanguageSwitcher = () => {
  const BASE_URL = useBaseUrl()
  const { setCurrentLocale } = useLanguage() as LanguageContextType

  const { loading, error, data } = useQuery(LANGUAGE_SWITCHER, {
    fetchPolicy: "no-cache",
  })

  if (loading) return <div>Loading...</div>
  if (error) return null

  if (!data?.languageSwitcher?.langImage) return null

  return (
    <>
      <ul className="my-auto row row-cols-3 g-2" style={{ listStyle: "none" }}>
        {data?.languageSwitcher?.langImage?.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => setCurrentLocale(item.lang)}
              className="border-0 bg-transparent p-0"
            >
              <img
                className="border rounded-5 shadow-sm"
                src={`${BASE_URL}${item.langImage.url}`}
                alt={item.langImage.alternativeText}
                width="35"
                height="auto"
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default LanguageSwitcher

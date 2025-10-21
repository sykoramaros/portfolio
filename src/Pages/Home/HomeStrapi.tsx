import { useState, useEffect } from "react"
import "./Home.css"
import TypedTextSkillsStrapi from "../../components/TypedText/TypedTextSkillsStrapi"
import { useQuery, gql } from "@apollo/client"
import { useBaseUrl } from "../../providers/BaseUrlProvider"
import { useLanguage } from "../../providers/LanguageProvider"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

const HOME_CONTENT = gql`
  query GetHomeContent($locale: I18NLocaleCode!) {
    homePage(locale: $locale) {
      documentId
      h1
      h2
      h3
      typedTexts {
        typedText
      }
      downloadButton
      p1a
      p1b
      span1
      p2a
      span2a
      p2b
      span2b
      p2c
      image {
        url
        alternativeText
      }
      pdfFile {
        url
        alternativeText
      }
      downloadButtonImage {
        documentId
        url
        alternativeText
      }
    }
  }
`

const HomeStrapi = () => {
  const BASE_URL = useBaseUrl()

  const { currentLocale } = useLanguage()

  const { loading, error, data } = useQuery(HOME_CONTENT, {
    variables: {
      locale: currentLocale,
    },
  })

  // console.log(data)

  const [svgDownloadHovered, setSvgDownloadHovered] = useState<string | null>(
    null
  )

  useEffect(() => {
    if (data?.homePage?.downloadButtonImage?.[1]?.url) {
      setSvgDownloadHovered(data.homePage.downloadButtonImage[1].url)
    }
  }, [data])

  const handleSvgDownloadHover = () => {
    setSvgDownloadHovered(`${data.homePage.downloadButtonImage[0].url}`)
  }
  const handleSvgDownloadLeave = () => {
    setSvgDownloadHovered(`${data.homePage.downloadButtonImage[1].url}`)
  }

  if (loading) return <LoadingSpinner />
  if (error) return <p>Error :(</p>

  return (
    <div>
      <div className="row g-2 g-md-0 align-items-center m-auto mt-5">
        <div className="col-lg-6">
          <h1 className="display-6 text-primary text-center">
            {data?.homePage?.h1}
          </h1>
          <h2 className="display-3 text-secondary text-center">
            {data?.homePage?.h2}
          </h2>
          <h3 className="fs-2 text-center text-uppercase">
            {data?.homePage?.h3}
          </h3>
          <p className="fs-1 text-center">
            <TypedTextSkillsStrapi
              texts={data.homePage.typedTexts.map((text) => text.typedText)}
            />
          </p>
          <div className="d-flex justify-content-center position-relative">
            <a
              className="download-button btn button-info fs-5 rounded-4 w-auto px-4 mt-4"
              href={`${BASE_URL}${data.homePage.pdfFile.url}`}
              // alternativeText={data.homePage.pdfFile.alternativeText}
              onMouseEnter={handleSvgDownloadHover}
              onMouseLeave={handleSvgDownloadLeave}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.homePage.downloadButton}{" "}
              {svgDownloadHovered && (
                <img
                  className="text-danger"
                  src={`${BASE_URL}${svgDownloadHovered}`}
                  // src={`${BASE_URL}${data.homePage.downloadButton[1].url}`}
                  width="30px"
                  alt="Download CV"
                />
              )}
            </a>
          </div>
          <p className="fs-3 text-center mt-5">
            {data.homePage.p1a}
            <br />
            {data.homePage.p1b}
            <span className="text-info"> {data.homePage.span1}</span>
          </p>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid rounded-circle w-75 m-auto d-block"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle at center, black 60%, transparent 100%)",
              maskImage:
                "radial-gradient(circle at center, black 60%, transparent 100%)",
            }}
            src={`${BASE_URL}${data.homePage?.image.url}`}
            alt={data.homePage.image.alternativeText}
          />
        </div>
        <div className="col mt-5">
          <p className="fs-3 text-center w-75 m-auto">
            {data.homePage.p2a}{" "}
            <span className="fs-3 text-warning">{data.homePage.span2a} </span>
            {data.homePage.p2b}
            <span className="fs-3 text-secondary">
              {" "}
              {data.homePage.span2b}
            </span>{" "}
            {data.homePage.p2c}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeStrapi

import React from "react"
import "./Footer.css"
// import AudioPlayer from "../AudioPlayer/AudioPlayer"
import AudioPlayerStrapi from "../AudioPlayer/AudioPlayerStrapi"
import { useQuery, gql } from "@apollo/client"
import { useParams, Link } from "react-router-dom"
import { useBaseUrl } from "../../context/BaseUrlProvider"

const MEDIA_IMG = gql`
  query GetMediaImgs {
    mediaImgs {
      documentId
      name
      img {
        url
        alternativeText
      }
      link
    }
  }
`

const FooterStrapi = () => {
  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()

  const { loading, error, data } = useQuery(MEDIA_IMG, {
    variables: {
      documentId,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  // console.log(data)

  return (
    <div>
      <div className="footer footer-container container-fluid d-flex align-items-center p-2 border border-2 border-opacity-10 border-black">
        <div className="w-100">
          {/*<div className="col-8 col-md-9 col-lg-9 col-xl-10"></div>*/}
          <div
            className="row row-cols-3 ms-auto me-1"
            style={{ width: "220px" }}
          >
            {data.mediaImgs.map((inside) => (
              <div className="" key={inside.documentId}>
                <Link to={inside.link}>
                  <img
                    className="mx-auto d-block rounded-3"
                    src={`${BASE_URL}${inside.img.url}`}
                    width="60px"
                    alt={inside.img.alternativeText}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="audio-player rounded-top-5">
        {/* <AudioPlayer /> */}
        <AudioPlayerStrapi />
      </div>
    </div>
  )
}

export default FooterStrapi

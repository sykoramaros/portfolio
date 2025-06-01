import React from "react"
import "./CookiesModalStrapi.css"

import { useQuery, gql } from "@apollo/client"
import { useParams, Link } from "react-router-dom"
import { useBaseUrl } from "../../context/BaseUrlProvider"

const COOKIES_MODAL = gql`
  query GetCookiesModal {
    cookiesModal {
      documentId
      image {
        url
        alternativeText
      }
      title
      text
      acceptButton
    }
  }
`
const CookiesModalStrapi = ({ onClose }) => {
  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()

  const { loading, error, data } = useQuery(COOKIES_MODAL, {
    variables: {
      documentId,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  // console.log(data)
  return (
    <>
      <div className="cookies-modal-overlay" onClick={onClose}>
        <div className="cookies-modal row d-flex justify-content-center align-items-center bg-white rounded-start-pill ms-2 p-4">
          <div className="d-none d-sm-block col-sm-5 cookies-img-container">
            <img
              className="cookies-img"
              src={`${BASE_URL}${data.cookiesModal.image.url}`}
              alt={data.cookiesModal.image.alternativeText}
            />
          </div>
          <div className="col-12 col-sm-7 text-center text-sm-start">
            <h1 className="fs-2">{data.cookiesModal.title}</h1>
            <p className="fs-4">{data.cookiesModal.text}</p>
            <button className="btn button-success" onClick={onClose}>
              {data.cookiesModal.acceptButton}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CookiesModalStrapi

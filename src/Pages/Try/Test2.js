import React from "react"
import { useQuery, gql } from "@apollo/client"
import { useParams, Link } from "react-router-dom"
// import { useBaseUrl } from "../../context/BaseUrlProvider"

const TESTS = gql`
  query ExampleQuery {
    authors {
      documentId
      email
      name
    }
  }
`
const Test2 = () => {
  // const BASE_URL = useBaseUrl()
  const { documentId } = useParams()

  const { loading, error, data } = useQuery(TESTS, {
    variables: {
      documentId,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)

  return (
    <>
      <p>{data.authors[0].name}</p>
      <p>{data.authors[0].email}</p>
    </>
  )
}

export default Test2

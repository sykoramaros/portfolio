import React from "react"
import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import InfoModal from "../InfoModal/InfoModal"

const MODAL = gql`
  query GetModal($documentId: ID!) {
    infoModal(documentId: $documentId) {
      modalTitle
      modalText
      buttonText
    }
  }
`

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // Zkontroluj localStorage
    const modalWasShown = localStorage.getItem("modalShown")

    if (!modalWasShown) {
      setIsOpen(true) // modal se zobrazí
      localStorage.setItem("modalShown", "true") // označ, že modal už byl zobrazen
    }
  }, [])

  const documentId = "ng3r328ul4gs581tvzgjeg10"

  const { data } = useQuery(MODAL, {
    variables: { documentId: documentId },
  })

  console.log(data)

  return (
    <>
      <div className="layout-container">
        <Navbar />
        <div className="position-relative" style={{ margin: "150px 0" }}>
          <img
            className="position-absolute w-100 d-none d-lg-block"
            style={{ opacity: "0.07", top: "-100px", zIndex: "-999" }}
            src={`${process.env.PUBLIC_URL}/img/background.svg`}
            alt="Background"
          />
          <Outlet />
        </div>
        <Footer />
      </div>
      {isOpen && (
        <InfoModal
          modalTitle={data?.infoModal?.modalTitle || "Loading..."}
          modalText={data?.infoModal?.modalText || "Loading..."}
          buttonText={data?.infoModal?.buttonText || "Loading..."}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Layout

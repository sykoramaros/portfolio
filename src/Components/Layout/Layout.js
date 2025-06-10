import React from "react"
import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useQuery, gql } from "@apollo/client"
import "./Layout.css"

// import Navbar from "../Navbar/Navbar"
import NavbarStrapi from "../Navbar/NavbarStrapi"
// import Footer from "../Footer/Footer"
import FooterStrapi from "../Footer/FooterStrapi"
import InfoModal from "../InfoModal/InfoModal"
import CookiesModalStrapi from "../CookiesModal/CookiesModalStrapi"

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
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false)
  const [cookiesModalIsOpen, setCookiesModalIsOpen] = useState(false)
  const [cookiesModalPosition, setCookiesModalPosition] = useState({
    top: "25vh",
    right: "0",
  })

  useEffect(() => {
    // Zkontroluj localStorage
    // const modalWasShown = localStorage.getItem("modalShown")
    const modalTimestamp = localStorage.getItem("modalShown")
    const currentTime = Date.now()
    const oneHour = 60 * 60 * 1000 // 1 hodina v milisekundách
    const fifteenMinutes = 15 * 60 * 1000 // 15 minut v milisekundách
    const fiveSeconds = 5 * 1000 // 5 sekund v milisekundách

    // if (!modalWasShown) {
    //   setIsOpen(true) // modal se zobrazí
    //   localStorage.setItem("modalShown", "true") // označ, že modal už byl zobrazen
    // }

    if (!modalTimestamp || currentTime - parseInt(modalTimestamp) > oneHour) {
      setInfoModalIsOpen(true) // modal se zobrazí
      localStorage.setItem("modalShown", currentTime.toString()) // ulož aktuální čas
    }
    if (
      !infoModalIsOpen &&
      currentTime - parseInt(modalTimestamp) > oneHour + fiveSeconds
    ) {
      setCookiesModalIsOpen(true)
    }
  }, [infoModalIsOpen])

  const documentId = "ng3r328ul4gs581tvzgjeg10"

  const { data } = useQuery(MODAL, {
    variables: { documentId: documentId },
  })

  // console.log(data)

  const handleCookiesClose = () => {
    // Spusť animaci skrytí
    setCookiesModalPosition({ top: "25vh", right: "-100vw" })

    // Po dokončení animace (1s) skutečně skryj modal a ulož do localStorage
    setTimeout(() => {
      setCookiesModalIsOpen(false)
      // localStorage.setItem("cookiesAccepted", "true")
    }, 1000) // 1000ms odpovídá transition času
  }

  return (
    <>
      <img
        className="position-fixed d-none d-lg-block"
        style={{
          opacity: "0.07",
          top: "-100px",
          zIndex: "-999",
          width: "100vw",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "none",
        }}
        src={`${process.env.PUBLIC_URL}/img/background.svg`}
        alt="Background"
      />

      <div className="container-fluid" style={{ margin: "150px 0" }}>
        <NavbarStrapi />

        <div className="container">
          <Outlet />
        </div>

        {/* <Footer /> */}
        <div>
          <FooterStrapi />
        </div>
      </div>
      {infoModalIsOpen && (
        <InfoModal
          modalTitle={data?.infoModal?.modalTitle || "Loading..."}
          modalText={data?.infoModal?.modalText || "Loading..."}
          buttonText={data?.infoModal?.buttonText || "Loading..."}
          onClose={() => setInfoModalIsOpen(false)}
        />
      )}
      {cookiesModalIsOpen && !infoModalIsOpen && (
        <div
          className="cookies-modal-container position-absolute"
          style={{
            top: cookiesModalPosition.top,
            right: cookiesModalPosition.right,
            transition: "all 1s ease-in-out",
            zIndex: "999",
          }}
        >
          <CookiesModalStrapi
            // onClose={() => setCookiesModalIsOpen(false)}
            onClose={handleCookiesClose}
          />
        </div>
      )}
    </>
  )
}

export default Layout

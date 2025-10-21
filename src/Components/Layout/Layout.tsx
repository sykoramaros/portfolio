import { useState, useEffect, type PropsWithChildren } from "react"
import { useQuery, gql } from "@apollo/client"
import "./Layout.css"
import NavbarStrapi from "../Navbar/NavbarStrapi"
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

const Layout = ({ children }: PropsWithChildren) => {
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false)
  const [cookiesModalIsOpen, setCookiesModalIsOpen] = useState(false)
  const [cookiesModalPosition, setCookiesModalPosition] = useState({
    top: "25vh",
    right: "0",
  })

  useEffect(() => {
    const modalTimestamp = localStorage.getItem("modalShown")
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    const currentTime = Date.now()
    const oneHour = 60 * 60 * 1000 // 1 hodina v milisekundách
    const fifteenMinutes = 15 * 60 * 1000 // 15 minut v milisekundách
    const fiveSeconds = 5 * 1000 // 5 sekund v milisekundách
    const oneWeek = 7 * 24 * 60 * 60 * 1000 // 1 týden v milisekundách

    if (!modalTimestamp || currentTime - parseInt(modalTimestamp) > oneWeek) {
      setInfoModalIsOpen(true) // modal se zobrazí
      localStorage.setItem("modalShown", currentTime.toString()) // ulož aktuální čas
    }
    if (!cookiesAccepted || currentTime - parseInt(cookiesAccepted) > oneWeek) {
      setCookiesModalIsOpen(true)
      localStorage.setItem("cookiesAccepted", currentTime.toString())
    }
  }, [])

  const documentId = "ng3r328ul4gs581tvzgjeg10"

  const { data } = useQuery(MODAL, {
    variables: { documentId: documentId },
  })

  const handleCookiesClose = () => {
    // Spusť animaci skrytí
    setCookiesModalPosition({ top: "25vh", right: "-100vw" })

    setTimeout(() => {
      setCookiesModalIsOpen(false)
    }, 1000)
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
        src={`${import.meta.env.VITE_API_URL}/img/background.svg`}
        alt="Background"
      />

      <div className="container-fluid" style={{ margin: "150px 0" }}>
        <NavbarStrapi />

        <div className="container">{children}</div>
      </div>
      <div className="footer-box">
        <FooterStrapi />
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
          <CookiesModalStrapi onClose={handleCookiesClose} />
        </div>
      )}
    </>
  )
}

export default Layout

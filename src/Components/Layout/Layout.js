import React from "react"
import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import InfoModal from "../InfoModal/InfoModal"

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Zkontroluj localStorage
    const modalWasShown = localStorage.getItem("modalShown")

    if (!modalWasShown) {
      setIsOpen(true) // modal se zobrazí
      localStorage.setItem("modalShown", "true") // označ, že modal už byl zobrazen
    }
  }, [])

  const modal_title = "Vitam Vas na mem webu"
  const info_text =
    "CMS backend funguje na mem domacim serveru, prosim o strpeni, pokud reguje pomaleji☺️"

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
          modalTitle={modal_title}
          modalText={info_text}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Layout

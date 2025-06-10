import React from "react"
import { useState, useEffect, useRef } from "react"

import { useQuery, gql } from "@apollo/client"
import { useParams, Link } from "react-router-dom"
import { useBaseUrl } from "../../context/BaseUrlProvider"
import { useLanguage } from "../../context/LanguageProvider"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"

// import TestLocale from "../TestLocale/TestLocale"

import "./Navbar.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// if (typeof currentLocale !== "string") throw new Error("locale není string")

const NAVBAR = gql`
  query NavbarQuery($locale: I18NLocaleCode!) {
    navbar(locale: $locale) {
      documentId
      logoImg {
        url
        alternativeText
      }
      home
      skills
      projects
      hobbies
      contact
    }
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  const handleIsOpen = (link) => {
    setIsOpen(false)
  }
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const BASE_URL = useBaseUrl()
  const { documentId } = useParams()
  const { currentLocale } = useLanguage()
  // console.log("currentLocale", currentLocale) // Mělo by být třeba: "cs"
  // console.log("Type of currentLocale:", typeof currentLocale)
  // console.log("Value of currentLocale:", JSON.stringify(currentLocale))
  // console.log("Length:", currentLocale?.length)
  // console.log("currentLocale type:", typeof currentLocale)
  // console.log("currentLocale length:", currentLocale.length)
  // console.log("currentLocale charAt(0):", currentLocale.charAt(0))
  // console.log("currentLocale charAt(1):", currentLocale.charAt(1))
  // console.log(
  //   "Raw bytes:",
  //   [...currentLocale].map((c) => c.charCodeAt(0))
  // )
  // console.log("Query vars", { locale: currentLocale })
  // console.log("Type:", typeof currentLocale) // string?
  // console.log("Raw chars:", [...currentLocale]) // ['c', 's']

  const { loading, error, data } = useQuery(NAVBAR, {
    variables: {
      // documentId,
      // locale: "en",
      locale: currentLocale, id: documentId
    },
    // fetchPolicy: "no-cache",
  })

  if (loading) return <p>Loading...</p>
  if (error) {
    return console.log(error)
    // return <p>Error :( {error.message}</p>
  }

  // console.log(data)

  return (
    <div>
      {/* <TestLocale /> */}
      {/* <p>{currentLocale}</p> */}
      <div className="container">
        <nav
          ref={navRef}
          className="nav-container navbar navbar-expand-lg fixed-top mt-3 mx-3 mx-sm-5 shadow-sm border border-1 border-opacity-10 border-black"
        >
          <div className="container-fluid">
            <Link className="navbar-brand fs-1 text-secondary" to={"/"}>
              <img
                // src={`${process.env.PUBLIC_URL}/img/logo.png`}
                src={`${BASE_URL}${data?.navbar?.logoImg?.url}`}
                alt={data?.navbar?.logoImg?.alternativeText}
                width="55px"
                height="auto"
                style={{ boxShadow: "0px 0px 8px", borderRadius: "50%" }}
              />
            </Link>
            <div className="me-auto">
              <LanguageSwitcher />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav mx-auto fs-4 gap-1">
                <li className="nav-item mx-auto">
                  <Link
                    className={`nav-link ${
                      isOpen === "home" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("home")}
                    aria-current="page"
                    to={"/"}
                  >
                    {data.navbar.home}
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                {/* <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  O mě
                </Link>
              </li> */}
                <li className="nav-item mx-auto">
                  <Link
                    className={`nav-link ${
                      isOpen === "skills" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("skills")}
                    to={"/skills-strapi"}
                  >
                    {data.navbar.skills}
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item mx-auto">
                  <Link
                    className={`nav-link ${
                      isOpen === "projects" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("projects")}
                    to={"/projects-strapi"}
                  >
                    {data.navbar.projects}
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item mx-auto">
                  <Link
                    className={`nav-link ${
                      isOpen === "hobbies" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("hobbies")}
                    to={"/hobbies-strapi"}
                  >
                    {data.navbar.hobbies}
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item mx-auto">
                  <Link
                    className={`nav-link ${
                      isOpen === "contact" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("contact")}
                    to={"/contact-strapi"}
                  >
                    {data.navbar.contact}
                  </Link>
                </li>
                {/* <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item">
                  <Link className="nav-link" to={"/try"}>
                    Try
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

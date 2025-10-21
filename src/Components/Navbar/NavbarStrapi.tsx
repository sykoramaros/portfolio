import { useState, useEffect, useRef } from "react"

import { useQuery, gql } from "@apollo/client"
import { useLocation, Link } from "@tanstack/react-router"
import { useBaseUrl } from "../../providers/BaseUrlProvider"
import { useLanguage } from "../../providers/LanguageProvider"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"

import "./Navbar.css"

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

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

const NavbarStrapi = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

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
  const location = useLocation()
  const { currentLocale } = useLanguage()

  const { loading, error, data } = useQuery(NAVBAR, {
    variables: {
      locale: currentLocale,
    },
  })

  if (loading) return <LoadingSpinner />
  if (error) {
    console.log(error)
    return null
  }

  return (
    <div>
      <div className="container">
        <nav
          ref={navRef}
          className="nav-container navbar navbar-expand-lg fixed-top mt-3 mx-3 mx-sm-5 shadow-sm border border-1 border-opacity-10 border-black"
        >
          <div className="container-fluid">
            <Link className="navbar-brand fs-1 text-secondary" to={"/"}>
              <img
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
                      location.pathname === "/"
                        ? "text-warning"
                        : "text-secondary"
                    }`}
                    aria-current="page"
                    to={"/"}
                  >
                    {data.navbar.home}
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item mx-auto">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/portfolio/skills"
                        ? "text-warning"
                        : "text-secondary"
                    }`}
                    to="/portfolio/skills"
                  >
                    {data.navbar.skills}
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item mx-auto">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/portfolio/projects"
                        ? "text-warning"
                        : "text-secondary"
                    }`}
                    to="/portfolio/projects"
                  >
                    {data.navbar.projects}
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item mx-auto">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/portfolio/hobbies"
                        ? "text-warning"
                        : "text-secondary"
                    }`}
                    to="/portfolio/hobbies"
                  >
                    {data.navbar.hobbies}
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item mx-auto">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/portfolio/contact"
                        ? "text-warning"
                        : "text-secondary"
                    }`}
                    to="/portfolio/contact"
                  >
                    {data.navbar.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavbarStrapi

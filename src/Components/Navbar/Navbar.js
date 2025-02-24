import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { i18n } from "@lingui/core"
import { Trans } from "@lingui/react"
import "./Navbar.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState("")

  const handleIsOpen = (link) => {
    setIsOpen(link)
  }

  return (
    <div>
      <div className="container">
        <nav className="nav-container navbar navbar-expand-lg fixed-top bg-body-tertiary mt-3 mx-5 shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand fs-1 text-secondary" to={"/"}>
              <img
                src={`${process.env.PUBLIC_URL}/img/logo.png`}
                alt="Logo"
                width="55px"
                height="auto"
                style={{ boxShadow: "0px 0px 8px", borderRadius: "50%" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="ms-auto d-flex">
                <ul className="navbar-nav d-flex">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault() // Zabrání výchozímu chování odkazu
                        i18n.activate("cs") // Aktivuje češtinu
                      }}
                      aria-label="Switch to Czech language"
                    >
                      <img
                        className="border rounded-5 shadow-sm"
                        src={`${process.env.PUBLIC_URL}/img/lang/czech.png`}
                        alt="Czech language"
                        width="35"
                        height="auto"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault() // Zabrání výchozímu chování odkazu
                        i18n.activate("en") // Aktivuje češtinu
                      }}
                      aria-label="Switch to English language"
                    >
                      <img
                        className="border rounded-5 shadow-sm"
                        src={`${process.env.PUBLIC_URL}/img/lang/english.png`}
                        alt="English language"
                        width="35"
                        height="auto"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault() // Zabrání výchozímu chování odkazu
                        i18n.activate("mn") // Aktivuje češtinu
                      }}
                      aria-label="Switch to Mongolian language"
                    >
                      <img
                        className="border rounded-5 shadow-sm"
                        src={`${process.env.PUBLIC_URL}/img/lang/mongolian.png`}
                        alt="Mongolian language"
                        width="35"
                        height="auto"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav mx-auto fs-4 gap-1">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isOpen === "home" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("home")}
                    aria-current="page"
                    to={"/"}
                  >
                    <Trans id="navbar.home" />
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                {/* <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  O mě
                </Link>
              </li> */}
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isOpen === "skills" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("skills")}
                    to={"/skills"}
                  >
                    <Trans id="navbar.skills" />
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isOpen === "projects" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("projects")}
                    to={"/projects"}
                  >
                    <Trans id="navbar.projects" />
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isOpen === "hobbies" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("hobbies")}
                    to={"/hobbies"}
                  >
                    <Trans id="navbar.hobbies" />
                  </Link>
                </li>
                <span className="nav-link d-none d-xl-block">|</span>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isOpen === "contact" ? "text-warning" : "text-secondary"
                    }`}
                    onClick={() => handleIsOpen("contact")}
                    to={"/contact"}
                  >
                    <Trans id="navbar.contact" />
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

import React from "react"
import { Link } from "react-router-dom"
import { i18n } from "@lingui/core"
import { Trans } from "@lingui/react"
import "./Navbar.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand fs-1 text-secondary" href="/">
            MaroSh_SeekOrA
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div className="ms-auto row col-2">
              <ul className="navbar-nav">
                <li>
                  <button onClick={() => i18n.activate("en")}>EN</button>
                  <button onClick={() => i18n.activate("cs")}>CS</button>
                </li>
              </ul>
            </div>
            <ul class="navbar-nav ms-auto fs-4">
              <li class="nav-item">
                <Link
                  class="nav-link active text-info"
                  aria-current="page"
                  to={"/"}
                >
                  <Trans id="navbar.home" />
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link" to={"/about"}>
                  O mě
                </Link>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link" to={"/skills"}>
                  <Trans id="navbar.skills" />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/projects"}>
                  <Trans id="navbar.projects" />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/hobbies"}>
                  <Trans id="navbar.hobbies" />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/contact"}>
                  <Trans id="navbar.contact" />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/try"}>
                  Try
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

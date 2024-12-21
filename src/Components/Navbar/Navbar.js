import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand fs-1 text-secondary" href="#">
            Marosh_SeekOrA
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
            <ul class="navbar-nav ms-auto fs-5">
              <li class="nav-item">
                <Link
                  class="nav-link active text-info"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/o_me"}>
                  O mě
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/znalosti"}>
                  Znalosti
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/projekty"}>
                  Projekty
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/konicky"}>
                  Koníčky
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/kontakt"}>
                  Kontakt
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

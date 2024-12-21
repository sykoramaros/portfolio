import React from "react"
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
                <a class="nav-link active text-info" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  O mě
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Znalosti
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Projekty
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Koníčky
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

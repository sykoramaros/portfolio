import React from "react"
import TypedTextSkills from "../../Components/TypedText/TypedTextSkills"

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row g-2 g-md-0 align-items-center m-auto mt-5">
          <div className="col-lg-6">
            <h1 className="display-6 text-primary text-center">
              Ahoj👋 jmenuju se
            </h1>
            <h2 className="display-3 text-secondary text-center">
              Maroš Sýkora
            </h2>
            <h3 className="fs-2 text-center text-uppercase">Jsem junior:</h3>
            <p className="fs-1 text-center">
              <TypedTextSkills />
            </p>
            <p className="fs-3 text-center mt-5">
              pocházím z Ostravy a tady jsem taky absolvolal kurz programování
              na Technické univerzitě.
              <br />
              P.S. Programování mě fakt <span className="text-info">baví</span>.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid rounded-circle w-75 m-auto d-block"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 60%, transparent 100%)",
                maskImage:
                  "radial-gradient(circle at center, black 60%, transparent 100%)",
              }}
              src={`${process.env.PUBLIC_URL}/img/computer.jpg`}
              alt="Person sitting behind a computer"
            />
          </div>
          <div className="col">
            <p className="fs-3 text-center w-75 m-auto mt-5">
              Mým cílem je neustále se{" "}
              <span className="text-warning">učit</span> a používat nové
              technologie a taky
              <span className="text-secondary"> rozšiřovat</span> možnosti
              designu a přispívat ke spokojenosti uživatelů.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

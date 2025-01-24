import React from "react"
import { Trans } from "@lingui/react"
import TypedTextSkills from "../../Components/TypedText/TypedTextSkills"

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row g-2 g-md-0 align-items-center m-auto mt-5">
          <div className="col-lg-6">
            <h1 className="display-6 text-primary text-center">
              <Trans id="welcome">welcome</Trans>
            </h1>
            <h2 className="display-3 text-secondary text-center">
              <Trans id="name">name</Trans>
            </h2>
            <h3 className="fs-2 text-center text-uppercase">
              <Trans id="junior">junior</Trans>
            </h3>
            <p className="fs-1 text-center">
              <TypedTextSkills />
            </p>
            <p className="fs-3 text-center mt-5">
              <Trans id="p1a">p1a</Trans>
              <br />
              <Trans id="p1b">p1b</Trans>
              <span className="text-info">
                {" "}
                <Trans id="span1">span1</Trans>
              </span>
              .
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
              <Trans id="p2a">p2a</Trans>{" "}
              <span className="text-warning">
                <Trans id="span2a">span2a</Trans>{" "}
              </span>
              <Trans id="p2b">p2b</Trans>
              <span className="text-secondary">
                {" "}
                <Trans id="span2b">span2b</Trans>
              </span>{" "}
              <Trans id="p2c">p2c</Trans>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

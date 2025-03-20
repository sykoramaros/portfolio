import React from "react"
import { useState } from "react";
import { Trans } from "@lingui/react"
import "./Home.css"
import TypedTextSkills from "../../Components/TypedText/TypedTextSkills"

const Home = () => {
  const [svgDownloadHovered, setSvgDownloadHovered] = useState("download_white.svg");

  const handleSvgDownloadHover = () => {
    setSvgDownloadHovered("download_info.svg");
  };

  const handleSvgDownloadLeave = () => {
    setSvgDownloadHovered("download_white.svg");
  };


  return (
    <div>
      <div className="container">
        <div className="row g-2 g-md-0 align-items-center m-auto mt-5">
          <div className="col-lg-6">
            <h1 className="display-6 text-primary text-center">
              <Trans id="home.welcome">home.welcome</Trans>
            </h1>
            <h2 className="display-3 text-secondary text-center">
              <Trans id="home.name">name</Trans>
            </h2>
            <h3 className="fs-2 text-center text-uppercase">
              <Trans id="home.junior">junior</Trans>
            </h3>
            <p className="fs-1 text-center">
              <TypedTextSkills />
            </p>
            <div className="d-flex justify-content-center position-relative">
              <a
                  className="download-button btn button-info fs-5 rounded-4 w-auto px-4 mt-4"
                  href={`${process.env.PUBLIC_URL}/documents/marian_sykora_cv_2025_3.pdf`}
                  onMouseEnter={handleSvgDownloadHover}
                  onMouseLeave={handleSvgDownloadLeave}
                  download
              >Download CV{" "}
                <img
                    className="text-danger"
                    src={`${process.env.PUBLIC_URL}/img/home/${svgDownloadHovered}`}
                    width="30px"
                    alt="Download CV"
                />
              </a>
            </div>
            <p className="fs-3 text-center mt-5">
              <Trans id="home.p1a">p1a</Trans>
              <br />
              <Trans id="home.p1b">p1b</Trans>
              <span className="text-info">
                {" "}
                <Trans id="home.span1">span1</Trans>
              </span>
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
          <div className="col mt-5">
            <p className="fs-3 text-center w-75 m-auto">
              <Trans id="home.p2a">p2a</Trans>{" "}
              <span className="fs-3 text-warning">
                <Trans id="home.span2a">span2a</Trans>{" "}
              </span>
              <Trans id="home.p2b">p2b</Trans>
              <span className="fs-3 text-secondary">
                {" "}
                <Trans id="home.span2b">span2b</Trans>
              </span>{" "}
              <Trans id="home.p2c">p2c</Trans>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

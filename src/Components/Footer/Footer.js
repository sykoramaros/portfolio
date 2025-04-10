import React from "react"
import "./Footer.css"
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const Footer = () => {
  return (
    <div>
      <div
        className="footer footer-container container-fluid d-flex align-items-center p-2 border border-2 border-opacity-10 border-black"
      >
        <div className="w-100">
          {/*<div className="col-8 col-md-9 col-lg-9 col-xl-10"></div>*/}
          <div className="row row-cols-3 ms-auto me-1" style={{ width: "220px" }}>
            <div className="">
              <a
                href="https://www.linkedin.com/in/sykoramaros/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mx-auto d-block rounded-3"
                  src={`${process.env.PUBLIC_URL}/img/linkedin.svg`}
                  width="60px"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="">
              <a href="https://github.com/sykoramaros"
                 target="_blank"
                 rel="noopener noreferrer">
                <img
                  className="mx-auto d-block rounded-3"
                  src={`${process.env.PUBLIC_URL}/img/github.svg`}
                  width="60px"
                  alt="GitHub"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/marian.sykora.75/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mx-auto d-block rounded-3"
                  src={`${process.env.PUBLIC_URL}/img/facebook.svg`}
                  width="60px"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
        <div  className="audio-player rounded-top-5">
          <AudioPlayer />
        </div>
    </div>
  )
}

export default Footer

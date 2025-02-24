import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div
        className="footer container-fluid bg-success d-flex align-items-center fixed-bottom p-2"
        style={{ borderRadius: "20px 20px 0px 0px" }}
      >
        <div className="row w-100 m-auto">
          <div className="col-8 col-md-9 col-lg-9 col-xl-10"></div>
          <div className="col-4 col-md-3 col-lg-3 col-xl-2 d-flex align-items-center justify-content-end gap-2">
            <div className="">
              <a
                href="https://www.linkedin.com/in/sykoramaros/"
                target="_blank"
              >
                <img
                  className="img-fluid mx-auto d-block"
                  src={`${process.env.PUBLIC_URL}/img/linkedin.svg`}
                  width={"75px"}
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="">
              <a href="https://github.com/sykoramaros" target="_blank">
                <img
                  className="img-fluid mx-auto d-block"
                  src={`${process.env.PUBLIC_URL}/img/github.svg`}
                  width={"75px"}
                  alt="GitHub"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

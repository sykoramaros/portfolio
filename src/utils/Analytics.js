import ReactGA from "react-ga4"

const TRACKING_ID = "G-E9JPWRRCM0"

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID)
}

export const logPageView = () => {
  const page = window.location.hash.replace("#", "") || "/"
  ReactGA.send({ hitType: "pageview", page }) // Nová syntaxe pro GA4
}

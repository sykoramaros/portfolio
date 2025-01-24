import React from "react"
import { Trans, useLingui } from "@lingui/react"
import HobbyCard from "../../Components/HobbyCard/HobbyCard"

import enHobbiesData from "../../locales/en/hobbies.json"
import csHobbiesData from "../../locales/cs/hobbies.json"

const Hobbies = () => {
  const { i18n } = useLingui()
  const currentLanguage = i18n.locale
  const hobbiesData = currentLanguage === "en" ? enHobbiesData : csHobbiesData

  return (
    <div className="container">
      <h1 className="display-3 mt-5 text-center text-primary text-shadow">
        <Trans id="hobbies.h1" />
      </h1>
      <br />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 mt-1">
        {hobbiesData.map((card, index) => (
          <HobbyCard
            key={index}
            rotation={card.rotation}
            image={card.image}
            title={card.title}
            backText={card.backText}
            link={card.link}
            textLink={card.textLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Hobbies

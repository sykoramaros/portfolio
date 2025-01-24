import React, { useEffect } from "react"
import { Trans } from "@lingui/react"
import { i18n } from "@lingui/core"

const Try = () => {
  useEffect(() => {
    console.log("Aktuální jazyk:", i18n.locale)
    console.log("Překlady:", i18n.messages)
    console.log(i18n.messages["welcome"])
  }, [])

  return (
    <div>
      <h1>Try</h1>
      <h2>
        <Trans id="welcome">welcome</Trans>
      </h2>
      <h3>{i18n.messages["welcome"]}</h3>
      <button onClick={() => i18n.activate("en")}>EN</button>
      <button onClick={() => i18n.activate("cs")}>CS</button>
    </div>
  )
}

export default Try

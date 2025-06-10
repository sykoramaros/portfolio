// TestLocale.js
import React from "react"
import { useLanguage } from "../../context/LanguageProvider"

const TestLocale = () => {
  const { currentLocale, setCurrentLocale } = useLanguage()

  const testChange = () => {
    console.log("Before change - currentLocale:", JSON.stringify(currentLocale))
    setCurrentLocale("cs") // Pevná hodnota bez GraphQL
    console.log("After change called")
    console.log("currentLocale type:", typeof currentLocale)
    console.log("currentLocale length:", currentLocale.length)
    console.log("currentLocale charAt(0):", currentLocale.charAt(0))
    console.log("currentLocale charAt(1):", currentLocale.charAt(1))
    console.log("Query vars", { locale: currentLocale });
  }

  return (
    <div>
      <p>Current: {JSON.stringify(currentLocale)}</p>
      <button onClick={testChange}>Test Change to CS</button>
    </div>
  )
}

export default TestLocale

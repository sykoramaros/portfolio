// context/LanguageProvider.js
import React, { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState("cs")

  return (
    <LanguageContext.Provider
      // value={{ currentLocale, setCurrentLocale, availableLanguages: LANGUAGES }}
      value={{ currentLocale, setCurrentLocale }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

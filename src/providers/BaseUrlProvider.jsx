import React, { createContext, useContext } from "react"

// Vytvoření Contextu
export const BaseUrlContext = createContext("")

export const BaseUrlProvider = ({ children, value }) => {
  return (
    <BaseUrlContext.Provider value={value}>{children}</BaseUrlContext.Provider>
  )
}

// Custom hook pro jednodušší přístup k hodnotě
export const useBaseUrl = () => useContext(BaseUrlContext)

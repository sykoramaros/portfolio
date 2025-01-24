import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"
import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"
import Layout from "../src/Components/Layout/Layout"
import Home from "../src/Pages/Home/Home"
import About from "../src/Pages/About/About"
import Skills from "../src/Pages/Skills/Skills"
import Projects from "../src/Pages/Projects/Projects"
import Hobbies from "../src/Pages/Hobbies/Hobbies"
import Contact from "../src/Pages/Contact/Contact"
import Try from "../src/Pages/Try/Try"

import enPages from "./locales/en/pages.json"
import csPages from "./locales/cs/pages.json"
import enHobbies from "./locales/en/hobbies.json"
import csHobbies from "./locales/cs/hobbies.json"

// Načtení lokalizačních dat
i18n.loadLocaleData("en", enPages)
i18n.loadLocaleData("cs", csPages)
i18n.loadLocaleData("en", enHobbies)
i18n.loadLocaleData("cs", csHobbies)

// Načtení a aktivace výchozího jazyka
i18n.load("en", enPages)
i18n.load("cs", csPages)
i18n.load("en", enHobbies)
i18n.load("cs", csHobbies)
i18n.activate("cs")

console.log(i18n.language)

const App = () => {
  return (
    <I18nProvider i18n={i18n}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/try" element={<Try />} />
          </Route>
        </Routes>
      </HashRouter>
    </I18nProvider>
  )
}

export default App

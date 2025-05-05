import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
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
import mnPages from "./locales/mn/pages.json"
import enHobbies from "./locales/en/hobbies.json"
import csHobbies from "./locales/cs/hobbies.json"
import mnHobbies from "./locales/mn/hobbies.json"
import enFrontendProjects from "./locales/en/frontend_projects.json"
import csFrontendProjects from "./locales/cs/frontend_projects.json"
import mnFrontendProjects from "./locales/mn/frontend_projects.json"
import enBackendProjects from "./locales/en/backend_projects.json"
import csBackendProjects from "./locales/cs/backend_projects.json"
import mnBackendProjects from "./locales/mn/backend_projects.json"

// Načtení lokalizačních dat
// i18n.loadLocaleData("en", enPages)
// i18n.loadLocaleData("cs", csPages)
// i18n.loadLocaleData("mn", mnPages)
// i18n.loadLocaleData("en", enHobbies)
// i18n.loadLocaleData("cs", csHobbies)
// i18n.loadLocaleData("mn", mnHobbies)
// i18n.loadLocaleData("en", enFrontendProjects)
// i18n.loadLocaleData("cs", csFrontendProjects)
// i18n.loadLocaleData("mn", mnFrontendProjects)
// i18n.loadLocaleData("en", enBackendProjects)
// i18n.loadLocaleData("cs", csBackendProjects)
// i18n.loadLocaleData("mn", mnBackendProjects)

i18n.load({
  en: {
    ...enPages,
    ...enHobbies,
    ...enFrontendProjects,
    ...enBackendProjects,
  },
  cs: {
    ...csPages,
    ...csHobbies,
    ...csFrontendProjects,
    ...csBackendProjects,
  },
  mn: {
    ...mnPages,
    ...mnHobbies,
    ...mnFrontendProjects,
    ...mnBackendProjects,
  },
})

// Načtení a aktivace výchozího jazyka
i18n.load("en", enPages)
i18n.load("cs", csPages)
i18n.load("mn", mnPages)
i18n.load("en", enHobbies)
i18n.load("cs", csHobbies)
i18n.load("mn", mnHobbies)
i18n.load("en", enFrontendProjects)
i18n.load("cs", csFrontendProjects)
i18n.load("mn", mnFrontendProjects)
i18n.load("en", enBackendProjects)
i18n.load("cs", csBackendProjects)
i18n.load("mn", mnBackendProjects)
i18n.activate("cs")

// console.log(i18n.language)

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

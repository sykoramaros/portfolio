import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

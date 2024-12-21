import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Layout from "../src/Components/Layout/Layout"
import Home from "../src/Pages/Home/Home"
import O_me from "../src/Pages/O_me/O_me"
import Znalosti from "../src/Pages/Znalosti/Znalosti"
import Projekty from "../src/Pages/Projekty/Projekty"
import Konicky from "../src/Pages/Konicky/Konicky"
import Kontakt from "../src/Pages/Kontakt/Kontakt"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/o_me" element={<O_me />} />
          <Route path="/znalosti" element={<Znalosti />} />
          <Route path="/projekty" element={<Projekty />} />
          <Route path="/konicky" element={<Konicky />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

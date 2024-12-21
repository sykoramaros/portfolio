import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App = () => {
  return (
    <div>
      <p className="fs-1 text-primary">Click</p>
      <p className="fs-1 text-secondary">Click</p>
      <p className="fs-1 text-success">Click</p>
      <p className="fs-1 text-danger">Click</p>
      <p className="fs-1 text-warning">Click</p>
      <p className="fs-1 text-info">Click</p>
      <p className="fs-1 text-light">Click</p>
      <p className="fs-1 text-dark">Click</p>
    </div>
  )
}

export default App

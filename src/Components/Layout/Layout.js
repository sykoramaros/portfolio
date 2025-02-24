import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "150px 0" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout

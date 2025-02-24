import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import FacebookMessenger from "../FacebookMessenger/FacebookMessenger"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "150px 0" }}>
        <Outlet />
      </div>
      <Footer />
      <FacebookMessenger />
    </div>
  )
}

export default Layout

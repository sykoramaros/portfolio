import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="position-relative" style={{ margin: "150px 0" }}>
          <img className="position-absolute w-100 d-none d-lg-block" style={{opacity: "0.07", top: "-100px", zIndex: "-999"}} src={`${process.env.PUBLIC_URL}/img/background.svg`} alt="Background"/>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout

import { Link } from "react-router-dom"
import logo from "../assets/Logo.png"
import "../style/style.css"
import { useState } from "react"
import { FaAlignLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar() {

  const [isMobail, setMobail] = useState(false);


  return (
    <div>
      <nav className='navbarCa'>
        <Link to={"/"}><div className="logo"><img src={logo} alt="" /></div></Link>

        <ul className={isMobail ? "nav-links-mobail" : "menu_items"} onClick={() => setMobail(false)}>
          <Link to={"/"}><li className="home">Home</li></Link>
          <Link to={"/about"}><li className="about">About</li></Link>
          <Link to={"services"}><li className="services">Services</li></Link>
          <Link to={"/contact"}><li className="contact">contact</li></Link>
          <Link to={"/singup"}><li className="singup">Sing Up</li></Link>
        </ul>
        <button className="navabr-toggle-menu" onClick={() => setMobail(!isMobail)}>
          {isMobail ? <IoClose /> : <FaAlignLeft />}
        </button>
      </nav>
    </div>
  )
}

export default Navbar
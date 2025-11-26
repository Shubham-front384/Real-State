import { useState } from "react"
import Top from "../Home/Top"
import Logo from "/Img/Logo.png"

const Navbar = () => {

  const linkName = ["home", "about us", "properties", "services"];

  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <Top />

      <nav className="flex items-center justify-between px-4 py-6 md:px-7 relative border-b-2 border-gray-400 md:text-lg lg:px-10 lg:text-xl">

        {/* Logo */}
        <div className="nav-logo flex items-center gap-2">
          <img className="logo-img w-7" src={ Logo } alt="logo-img" />
          <h5 className="logo- capitalize">
            estatein
          </h5>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {
            menuOpen ? <i onClick={ () => setMenuOpen(false) } className="ri-menu-3-line text-xl"></i> : ""
          }
        </div>

        {/* Navigation Links */}
        <div className={`${ menuOpen ? "hidden md:flex" : "absolute bg-black w-full left-0 top-0 py-6 text-start pl-6 text-xl gap-6 transition-all duration-300 ease-in-out" }`}>
          <ul className="nav-links flex flex-col gap-2 list-none md:flex-row md:gap-6 lg:gap-10">
            {
              linkName.map((val, index) => {
                return (
                  <li className="nav-link capitalize" key={index}>
                    { val }
                  </li>
                )
              })
            }
          </ul>
          <div className="nav-contact w-max pt-8 md:hidden">
            <h5 className="contact capitalize border-2 w-max px-6 py-2 rounded-xl border-gray-400">
              contact us
            </h5>
          </div>

          {/* Close (only mobile) */}
          <div className="nav-close">
            <i onClick={ () => setMenuOpen(true) } className={`ri-close-circle-fill ${ menuOpen ? "hidden" : "text-2xl absolute top-5 right-4 md:hidden" }`}></i>
          </div>
        </div>

        <div className="nav-contact hidden md:block">
          <h5 className="contact capitalize border-2 w-max px-6 py-2 rounded-xl border-gray-400">
            contact us
          </h5>
        </div>
      </nav>
    </>
  )
}

export default Navbar

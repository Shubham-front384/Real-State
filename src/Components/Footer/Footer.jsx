import FooterCopyright from "./FooterCopyright"
import FooterMenu from "./FooterMenu"

import Logo from "/Img/Logo.png"

const Footer = () => {
  return (
    <>
      <section className="footer p-4 flex flex-col gap-10 md:p-7">
        <div className="footer-email flex flex-col gap-4">
          <div className="logo flex items-center gap-2">
            <img src={Logo} alt="logo-img" className="w-10" />
            <h5 className="capitalize text-lg">estatein</h5>
          </div>
          <div className="relative">
            <input type="text" id="email" className="border-2 rounded w-full py-3 pl-12 text-xl" placeholder="Enter Your Email" />
            <div>
              <i className="ri-mail-ai-line text-2xl text-gray-400 absolute left-4 top-2"></i>
              <i className="ri-send-plane-fill text-2xl absolute top-2 right-4"></i>
            </div>
          </div>
        </div>
        <div>
          <FooterMenu />
          <FooterCopyright />
        </div>
      </section>
    </>
  )
}

export default Footer

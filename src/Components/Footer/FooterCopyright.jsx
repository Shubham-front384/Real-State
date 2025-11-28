
const FooterCopyright = () => {
  return (
    <div className="p-4 bg-[#1a1a1a] md:p-7">
      <div className="flex flex-col items-center gap-8 py-8 md:flex-row md:justify-between">
        <div className="logo flex gap-4 md:order-2">
          <i className="ri-facebook-fill text-3xl p-4 px-5 rounded-full bg-gray-500"></i>
          <i className="ri-linkedin-box-fill text-3xl p-4 px-5 rounded-full bg-gray-500"></i>
          <i className="ri-twitter-fill text-3xl p-4 px-5 rounded-full bg-gray-500"></i>
          <i className="ri-youtube-fill text-3xl p-4 px-5 rounded-full bg-gray-500"></i>
        </div>
        <div className="copyright">
          <p className="text-center capitalize font-medium text-[14px] flex flex-col gap-2 md:order-1 md:flex-row md:gap-6 lg:text-[18px]">
            @2025 estatein. all rights reserved.
            <span>terms & conditions</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterCopyright

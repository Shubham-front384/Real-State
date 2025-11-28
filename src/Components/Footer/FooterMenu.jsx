
const FooterMenu = () => {
  return (
    <div className="p-4 md:p-7">
      <div className="py-4 md:flex md:gap-4 lg:gap-10" style={{columns: "120px"}}>
        <ul className="home-links w-full flex flex-col gap-2 pb-4 border-b-2 border-gray-400 md:border-0">
          <li className="font-medium text-lg text-gray-400 capitalize md:text-[18px] lg:text-[20px]">Home</li>
          <li className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">Hero Section</li>
          <li className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">Features</li>
          <li className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">Properties</li>
          <li className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">Testimonials</li>
          <li className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">FAQ's</li>
        </ul>
        <ul className="about-links w-full flex flex-col gap-2 pb-4 border-b-2 border-gray-400 md:border-0">
          <li className="font-medium text-lg text-gray-400 capitalize md:text-[18px] lg:text-[20px]">about us</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">our story</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">our works</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">how it works</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">our team</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">our clients</li>
        </ul>
        <ul className="properties-link w-full flex flex-col gap-2 pb-4 border-b-2 border-gray-400 md:border-0">
          <li className="font-medium text-lg text-gray-400 capitalize md:text-[18px] lg:text-[20px]">properties</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">portfolio</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">categories</li>
        </ul>
        <ul className="services-link w-full flex flex-col gap-2 pb-4 border-b-2 border-gray-400 md:border-0">
          <li className="font-medium text-lg text-gray-400 capitalize md:text-[18px] lg:text-[20px]">services</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">valuation mastery</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">strategic marketing</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">negotiation wizardry</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">closing success</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">property management</li>
        </ul>
        <ul className="contact-link w-full flex flex-col gap-2 pb-4 border-b-2 border-gray-400 md:border-0">
          <li className="font-medium text-lg text-gray-400 capitalize md:text-[18px] lg:text-[20px]">contact us</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">contact form</li>
          <li className="font-medium text-[14px] capitalize md:text-[16px] lg:text-[18px]">our offices</li>
        </ul>
      </div>
    </div>
  )
}

export default FooterMenu

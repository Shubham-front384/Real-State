import dreamHome from "/Img/dreamHome.png"
import propertyManagement from "/Img/propertyManagement.png"
import propertyValue from "/Img/propertyValue.png"
import smartInvestment from "/Img/smartInvestment.png"

const HomeCards = () => {
  return (
    <>
      <div className="px-4 pt-0 pb-15 md:px-7 md:pt-0">
        <div className="card2 grid gap-3 border-2 border-gray-400 rounded-xl p-3">
          <div className="dream-home flex flex-col items-center justify-center gap-4 border-[1px] border-gray-500 rounded-xl py-5 px-3.5 h-[148px] lg:py-12 lg:px-6 lg:h-full" style={{position: "relative"}}>
            <div className="dream-home-logo">
              <img src={dreamHome} alt="dream-home-img" className="w-18" />
            </div>
            <p className="dream-home-para capitalize text-sm font-semibold text-center md:text-[16px] lg:text-2xl">
              find your dream home
            </p>
            <div style={{position: "absolute", top: "1rem", right: "1rem"}}>
              <i className="ri-arrow-right-up-long-fill text-2xl"></i>
            </div>
          </div>
          <div className="property-value flex flex-col items-center justify-center gap-4 border-[1px] border-gray-500 rounded-xl py-5 px-3.5 h-[148px] lg:py-12 lg:px-6 lg:h-full" style={{position: "relative"}}>
            <div className="property-value-logo">
              <img src={propertyValue} alt="dream-home-img" className="w-18" />
            </div>
            <p className="property-value-para capitalize text-sm font-semibold text-center md:text-[16px] lg:text-2xl">
              unlock property value
            </p>
            <div style={{position: "absolute", top: "1rem", right: "1rem"}}>
              <i className="ri-arrow-right-up-long-fill text-2xl"></i>
            </div>
          </div>
          <div className="property-management flex flex-col items-center justify-center gap-4 border-[1px] border-gray-500 rounded-xl py-5 px-3.5 h-[148px] lg:py-12 lg:px-6 lg:h-full" style={{position: "relative"}}>
            <div className="property-management-logo">
              <img src={propertyManagement} alt="dream-home-img" className="w-18" />
            </div>
            <p className="property-management-para capitalize text-sm font-semibold text-center md:text-[16px] lg:text-2xl">
              effortless property management
            </p>
            <div style={{position: "absolute", top: "1rem", right: "1rem"}}>
              <i className="ri-arrow-right-up-long-fill text-2xl"></i>
            </div>
          </div>
          <div className="informed-decision flex flex-col items-center justify-center gap-4 border-[1px] border-gray-500 rounded-xl py-5 px-3.5 h-[148px] lg:py-12 lg:px-6 lg:h-full" style={{position: "relative"}}>
            <div className="informed-decision-logo">
              <img src={smartInvestment} alt="dream-home-img" className="w-18" />
            </div>
            <p className="informed-decision-para capitalize text-sm font-semibold text-center md:text-[16px] lg:text-2xl">
              smart investments, informed decisions
            </p>
            <div style={{position: "absolute", top: "1rem", right: "1rem"}}>
              <i className="ri-arrow-right-up-long-fill text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCards

import PropertiesCard from "./PropertiesCard"

const Properties = () => {
  return (
    <>
      <section className="main-properties px-4 pb-10 flex flex-col gap-10 md:px-7">
        <div className="properties-top flex flex-col gap-5">
          <div className="properties-img flex items-center gap-1">
            <i className="ri-shining-fill text-2xl text-gray-400"></i>
            <i className="ri-shining-fill text-sm text-gray-500"></i>
            <i className="ri-shining-fill text-gray-600" style={{fontSize: "5.6px"}}></i>
          </div>
          <h2 className="properties-heading capitalize font-semibold text-3xl md:text-[38px] lg:text-[48px]">
            featured properties
          </h2>
          <p className="properties-para text-gray-300 font-medium text-lg leading-[150%] md:text-lg lg:text-[18px]">
            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.
          </p>
        </div>
        <PropertiesCard />
      </section>
    </>
  )
}

export default Properties



const HomeInfoRight = () => {
  return (
    <>
      <section className="homeInfo-right mt-20 flex flex-col gap-8 md:order-1 md:w-1/2 md:mt-14 md:gap-16 lg:gap-16">
        <div className="flex flex-col gap-2 md:gap-6">
          <h1 className="text-2xl font-semibold md:text-4xl lg:text-6xl lg:leading-[120%]">
            Discover Your Dream<br /> Property with Estatein
          </h1>
          <p className="text-sm text-gray-500 font-medium md:text-[16px] lg:text-[18px] lg:leading-[150%]">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className="homeInfo-btns flex flex-col gap-4 md:flex-row">
          <button className="capitalize font-medium border-[1px] rounded-xl py-4 text-sm border-gray-500 md:py-3.5 md:px-5 lg:text-lg lg:py-[18px] lg:px-6">
            learn more
          </button>
          <button className="capitalize font-medium border-[1px] rounded-xl py-4 text-sm border-gray-500 bg-blue-600 md:py-3.5 md:px-5 lg:text-lg lg:py-[18px] lg:px-6">
            browser properties
          </button>
        </div>
        <div className="card1 grid gap-3">
          <div className="happy-customer">
            <h5 className="card-heading text-2xl font-bold text-white flex flex-col items-center border-[1px] border-gray-500 rounded-xl py-4 md:items-start md:py-5 md:px-3.5 md:text-3xl lg:text-[40px] lg:px-5 lg:py-7">
              200+
              <span className="card-para text-sm text-gray-500 capitalize md:text-base lg:text-xl">
                happy customers
              </span>
            </h5>
          </div>
          <div className="properties-client">
            <h5 className="card-heading text-2xl font-bold text-white flex flex-col items-center border-[1px] border-gray-500 rounded-xl py-4 md:items-start md:py-5 md:px-3.5 md:text-3xl lg:text-[40px] lg:px-5 lg:py-7">
              10k+
              <span className="card-para text-sm text-gray-500 capitalize md:text-base lg:text-xl">
                properties for clients
              </span>
            </h5>
          </div>
          <div className="year-experience">
            <h5 className="card-heading text-2xl font-bold text-white flex flex-col items-center border-[1px] border-gray-500 rounded-xl py-4 md:items-start md:py-5 md:px-3.5 md:text-3xl lg:text-[40px] lg:px-5 lg:py-7">
              16+
              <span className="card-para text-sm text-gray-500 capitalize md:text-base lg:text-xl">
                years of experience
              </span>
            </h5>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeInfoRight

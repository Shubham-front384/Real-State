import 'remixicon/fonts/remixicon.css'

import Building from "/Img/Building.png"

const HomeInfoLeft = () => {
  return (
    <>
      <div className="home-img relative md:order-2 md:w-1/2">
        <img className="rounded-2xl border-2 border-gray-400 h-[380px] w-full md:border-0 md:rounded-[0px] md:h-[515px] lg:h-[814px]" src={Building} alt="building-img" />
        <div className="w-max h-max absolute -bottom-20 -left-1 md:top-12 md:-left-20 lg:top-36">
          <svg width={150} height={150} className="svg-discover">
            <path id="curve" d="M 6 74 A 70 70 0 1 1 6 75" className="stroke-gray-400 fill-black" strokeWidth={2}></path>
            <path id="curve1" d="M 30 75 A 45 45 0 1 1 30 76" className="fill-black"></path>
            <path id="curve2" d="M 40 75 A 35 35 0 1 1 40 76" className="stroke-gray-400 fill-gray-500" strokeWidth={2}></path>
            <text className="text">
              <textPath href="#curve1" className="fill-white text-xl tracking-wider">
                ✨Discover Your Dream Property
              </textPath>
            </text>
          </svg>
          <div className='absolute z-10 top-1/2 left-1/2' style={{transform: "translate(-50%, -50%)"}}>
            <i className="ri-arrow-right-up-long-fill text-4xl"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeInfoLeft

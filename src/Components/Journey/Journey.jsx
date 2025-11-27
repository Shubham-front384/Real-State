import Journey1 from '/Img/Journey1.png'
import Journey2 from '/Img/Journey2.png'

const Journey = () => {
  return (
    <>
      <section className="main-journey bg-[#1a1a1a73] px-4 py-10 flex flex-col gap-10 relative overflow-hidden border-y-2 border-gray-400 md:flex-row md:items-center md:px-[80px] md:py-[60px]">
        <div className='relative z-20'>
          <h3 className="font-semibold text-[28px] capitalize md:text-[38px]">
            start your real estate journey today
          </h3>
          <p className="font-medium text-[14px] leading-[150%] text-gray-400 leading-[150%] md:text-[16px]">
            Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
          </p>
        </div>
        <button className="font-medium capitalize w-full bg-purple-600 hover:bg-purple-700 transition text-white py-3 rounded-xl text-lg px-3.5 relative z-20 lg:text-[18px] md:px-6 md:py-4 lg:px-7 lg:py-5">
          explore properties
        </button>
        <div>
          <img src={Journey1} alt="journey1" className='w-sm absolute z-10 -top-20 -left-4' />
          <img src={Journey2} alt="journey2" className='w-sm absolute z-10 bottom-0 right-0' />
        </div>
      </section>
    </>
  )
}

export default Journey

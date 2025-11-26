import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const Top = () => {

  const [isClose, setIsClose] = useState(true);

  return (
    <>
      <section className={`home-top py-3 bg-[url(/Img/homeTop.png)] bg-cover bg-no-repeat bg-center relative ${ isClose ? "" : "hidden" }`}>
        <h5 className="top-heading capitalize text-center text-lg md:text-lg lg:text-xl">
          <i className="ri-sparkling-2-fill text-amber-300 px-2"></i>discover your dream property with estatein <span className='underline'>learn more</span>
        </h5>
        <span className='absolute right-2 top-10 md:top-2 md:right-4'>
          <i className="ri-close-circle-fill text-2xl cursor-pointer" onClick={ () => setIsClose(false) }></i>
        </span>
      </section>
    </>
  )
}

export default Top

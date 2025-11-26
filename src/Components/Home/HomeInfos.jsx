import HomeInfoLeft from "./HomeInfoLeft"
import HomeInfoRight from "./HomeInfoRight"

const HomeInfos = () => {
  return (
    <>
      <section className="home-details flex flex-col justify-center gap-12 px-4 py-15 md:px-7 md:py-0 md:gap-0">
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <HomeInfoLeft />
          <HomeInfoRight />
        </div>
      </section>
    </>
  )
}

export default HomeInfos

import HomeDetails from './HomeDetails'
import Navbar from './Navbar'
import Properties from '../Properties/Properties'
import Testimonial from '../Testimonial/Testimonial'
import Journey from '../Journey/Journey'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeDetails />
      <Properties />
      <Testimonial />
      <Journey />
      <Footer />
    </>
  )
}

export default Home

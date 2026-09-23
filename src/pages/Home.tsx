import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import FeaturedDishes from '../components/home/FeaturedDishes'
import Philosophy from '../components/home/Philosophy'
import Atmosphere from '../components/home/Atmosphere'
import ReservationCTA from '../components/home/ReservationCTA'
import LocationSection from '../components/home/LocationSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedDishes />
      <Philosophy />
      <Atmosphere />
      <ReservationCTA />
      <LocationSection />
    </>
  )
}

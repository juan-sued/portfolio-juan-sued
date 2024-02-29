import BackGroundImage from '@/components/shared/BackGroundImage'
import CatchPhrase from './components/CatchPhrase'
import Differences from './components/Differences'
import Services from './components/Services'
import Clients from './components/Clients'
import AboutMe from './components/AboutMe'
import Banners from './components/Banners'
import World from './components/World'

export default function Home() {
  return (
    <>
      <BackGroundImage />

      <main className="grid  gap-14 mt-[70px] sm:mt-16 w-full ">
        <CatchPhrase />
        <Banners />
        <World />
        <Differences />
        <Services />
        <Clients />
        <AboutMe />
      </main>
    </>
  )
}

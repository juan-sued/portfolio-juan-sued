import BackGroundImage from '@/components/shared/BackGroundImage'
import CatchPhrase from './components/CatchPhrase'
import Differences from './components/Differences'
import Services from './components/Services'
import Clients from './components/Clients'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <>
      <BackGroundImage />

      <main className="grid  gap-14 mt-[70px] sm:mt-16 w-full ">
        <CatchPhrase />
        <Differences />
        <Services />
        <Clients />
        <AboutMe />
      </main>
    </>
  )
}

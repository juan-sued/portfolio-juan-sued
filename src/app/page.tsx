import BackGroundImage from '@/components/shared/BackGroundImage'
import AboutMe from './components/AboutMe'
import CatchPhrase from './components/CatchPhrase'
import Differences from './components/Differences'
import Services from './components/Services'

export default function Home() {
  return (
    <>
      <BackGroundImage />

      <main className="grid  gap-2 mt-[70px] sm:mt-16 w-full ">
        <CatchPhrase />
        <AboutMe />
        <Differences />
        <Services />
      </main>
    </>
  )
}

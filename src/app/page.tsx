import BackGroundImage from '@/components/shared/BackGroundImage'
import AboutMe from './components/AboutMe'
import CatchPhrase from './components/CatchPhrase'
import Differences from './components/Differences'

export default function Home() {
  return (
    <>
      <BackGroundImage />

      <main className="grid  gap-2 p-4 mt-[70px] sm:mt-16 w-full ">
        <CatchPhrase />
        <AboutMe />
        <Differences />
      </main>
    </>
  )
}

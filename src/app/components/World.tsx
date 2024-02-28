'use client'

import TitleSection from '@/components/shared/TitleSection'
import Spline from '@splinetool/react-spline'

export default function World() {
  return (
    <>
      <section className="md:my-[-100px] h-[400px]  md:h-[1200px] block md:flex">
        <div className=" w-full md:w-1/3 flex justify-center items-center">
          <TitleSection title="Apareça para o mundo" />
        </div>
        <div className="h-full w-full md:w-2/3 cursor-pointer">
          <Spline scene="https://prod.spline.design/xaNMdPaygl1gNTvo/scene.splinecode" />
        </div>
      </section>
    </>
  )
}

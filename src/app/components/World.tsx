'use client'

import TitleSection from '@/components/shared/TitleSection'
import Spline from '@splinetool/react-spline'

export default function World() {
  return (
    <>
      <section className="hidden lg:flex my-[-100px]   h-[1200px] ">
        <div className="  w-1/3 flex justify-center items-center">
          <TitleSection title="Apareça para o mundo" />
        </div>
        <div className="h-full  w-2/3 cursor-pointer">
          <Spline scene="https://prod.spline.design/xaNMdPaygl1gNTvo/scene.splinecode" />
        </div>
      </section>
    </>
  )
}

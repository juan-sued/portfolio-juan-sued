import Orbitals from '@/components/shared/Orbitals'
import TitleSection from '@/components/shared/TitleSection'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <>
      <section
        id="about-me"
        className="differences  w-full flex flex-col items-center   gap-20"
      >
        <TitleSection title="Sobre mim" />

        <Orbitals />

        <div className="hidden dark:relative dark:flex  -z-40 top-6 h-0 overflow-visible  pointer-events-none w-full  justify-center items-center">
          <Image
            alt="fundo esfera roxa com reflexo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[500px] h-auto"
            src={'/assets/ballwithreflect.svg'}
          />
        </div>
        <div className=" mt-[160px] sm:mt-[70px] w-[90%] max-w-[800px]   p-2  backdrop-blur-md  rounded-3xl shadow-shadow-border-white  border border-white border-opacity-10">
          <div className=" w-full h-full p-6 blur-radial-gradient border rounded-2xl border-white border-opacity-10">
            <h1 className="relative h-0 top-[-120px] sm:top-[-75px] overflow-visible font-bold drop-shadow text-5xl">
              Por que me escolher?
            </h1>
            <div className="w-full grid gap-2">
              <p className="w-full">
                Formado pela <strong> Driven Education</strong> e graduando em
                Engenharia na
                <strong> UERJ</strong>.
              </p>

              <p>
                Trabalhei na maior plataforma DXP(Plataforma de Digital
                Experience) do Brasil,
                <strong> Lumis </strong>, contribuindo no desenvolvimento de
                portais para empresas renomadas.
              </p>
              <p>
                Algumas delas são: <strong> B3</strong>
                (Bolsa de Valores do Brasil), <strong> Grupo Alliance</strong>,
                <strong> Petrobras</strong>, <strong> Sulamérica</strong>,
                <strong> Banco BMG</strong>, <strong> SHV</strong>
                (SuperGasBras), <strong> Banco Safra</strong>,
                <strong> Banco Guanabara</strong>,<strong> Athena Saúde</strong>
                , <strong> VR</strong> e<strong> Aeroporto Viracopos</strong>.
              </p>
              <div className="w-full flex justify-end">
                <a
                  href="https://wa.me/+5521984980723"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">Fale comigo</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

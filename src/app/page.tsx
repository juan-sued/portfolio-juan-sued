import BackGroundImage from '@/components/shared/BackGroundImage'
import LoaderSpinner from '@/components/shared/Loaders/LoaderSpinner/LoaderSpinner'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function Home() {
  return (
    <>
      <BackGroundImage />

      <main className="grid  gap-2 p-4 mt-[70px] sm:mt-16 w-full ">
        <section className="titleIntroduction w-full flex items-center justify-center h-40">
          <h1 className=" max-w-[600px]  bg-gradient-to-b from-black dark:from-white to-rgba-white-70 drop-shadow bg-clip-text text-transparent text-3xl md:text-7xl w-full text-center">
            Um horizonte de <strong>POSSIBILIDADES</strong>
          </h1>
        </section>
        <section className="w-full flex justify-center">
          <div className="contentIntroduction mt-[78px] sm:mt-[60px] w-[90%] max-w-[600px] h-96 p-2  backdrop-blur-md  rounded-3xl shadow-shadow-border-white  border border-white border-opacity-10">
            <div className="contentIntroduction w-full h-full p-6 blur-radial-gradient border rounded-2xl border-white border-opacity-10">
              <section className="w-full flex justify-center">
                <div className="contentIntroduction  p-2  backdrop-blur-md  rounded-full shadow-shadow-border-white  border border-white border-opacity-10">
                  <div className="contentIntroduction w-full h-full p-2 blur-radial-gradient border  border-white border-opacity-10 rounded-full">
                    <Avatar className="w-36 h-36">
                      <AvatarImage
                        src="https://github.com/juan-sued.png"
                        alt="Imagem de perfil"
                        className="animate__animated animate__fadeIn"
                      />
                      <AvatarFallback>
                        <LoaderSpinner />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

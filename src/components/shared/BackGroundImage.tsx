import Image from 'next/image'

export default function BackGroundImage() {
  return (
    <>
      <section className="overflow-visible relative top-0  left-0 right-0 w-full h-0 z-[-1] animate__animated animate__fadeIn ">
        <video
          className="w-screen h-screen object-cover hidden dark:block "
          preload="false"
          autoPlay
          muted
          loop
          src="/assets/black-hole.webm"
          typeof="video/webm"
        />

        <div className="w-screen h-screen relative dark:hidden">
          <Image
            className="w-full h-full object-cover"
            src="/assets/ondas.gif"
            alt="Meu GIF"
            layout="fill"
          />
        </div>
      </section>
    </>
  )
}
